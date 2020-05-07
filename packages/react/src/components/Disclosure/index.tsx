import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import BaseDetails, { BaseDetailsProps } from '../BaseDetails';
import BaseSummary from '../BaseSummary';
import Icon from '../Icon';
import { isElement } from '../../utilities/helpers';

export type DisclosureVariant = 'default' | 'panel';
export type DisclosureAnatomy = 'summary' | 'marker' | 'contentsInner' | 'contentsOuter';
export type DisclosureLifecycleState = 'open' | 'closed' | 'opening' | 'closing';
export type DisclosureLifecycleMethod = 'onCloseStart' | 'onCloseCancel' | 'onCloseEnd' | 'onOpenStart' | 'onOpenCancel' | 'onOpenEnd';
export interface DisclosureState {
	open: boolean;
	lifecycle: DisclosureLifecycleState;
	height?: string;
}

export interface DisclosureProps extends BaseDetailsProps {
	/** The content for the summary element generated by the disclosure component. */
	summary: string;
	/** The base `className` according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the `<summary>`. */
	summaryClass?: string;
	/** The `className` for the outer contents `<div>`. */
	contentsOuterClass?: string;
	/** The `className` that will be applied to the inner contents `<div>`. */
	contentsInnerClass?: string;
	/** A class that will be applied to the outer contents `<div>` while opening. */
	closingClass?: string;
	/** A class that will be applied to the outer contents `<div>` while closing. */
	openingClass?: string;
	/**
	 * The `className` that will be applied to the summary's icon indicator,
	 * which takes the place of the native `summary::marker` pseudo element.
	 */
	markerClass?: string;
	/** Whether resizing the window should trigger a height calculation update. */
	updateOnResize?: boolean;
	/** The variant for the disclosure. */
	variant?: DisclosureVariant;
	/** Whether to animate the opening/closing of the disclosure. */
	animate?: boolean;
	/** A reference to the inner <details> element. */
	detailsRef?: React.RefObject<HTMLDetailsElement>;
	/** Lifecycle method that is triggered when the disclosure begins to close. */
	onCloseStart?: (state: DisclosureState) => void;
	/** Lifecycle method that is triggered when the user clicks on the disclosure as it's closing. */
	onCloseCancel?: (state: DisclosureState) => void;
	/** Lifecycle method that is triggered when the disclosure has finished closing. */
	onCloseEnd?: (state: DisclosureState) => void;
	/** Lifecycle method that is triggered when the disclosure begins to open. */
	onOpenStart?: (state: DisclosureState) => void;
	/** Lifecycle method that is triggered when the user clicks on the disclosure as it's opening. */
	onOpenCancel?: (state: DisclosureState) => void;
	/** Lifecycle method that is triggered when the disclosure has finished opening. */
	onOpenEnd?: (state: DisclosureState) => void;
}

export default class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
	// eslint-disable-next-line react/sort-comp
	public static bemBase = 'disclosure';
	public static bemElements: Record<DisclosureAnatomy, string> = {
		summary: 'summary',
		marker: 'marker',
		contentsInner: 'contents-inner',
		contentsOuter: 'contents-outer',
	}

	/**
	 * The time in milliseconds to delay when recalculating the contents height
	 * due to a window resize. Only applies if `updateOnResize` is `true`.
	*/
	public static RESIZE_DEBOUNCE_DELAY = 150;

	public detailsRef: React.RefObject<HTMLDetailsElement>;

	public contentsOuterHeight = 0;

	public contentsOuterRef: React.RefObject<HTMLDivElement>;

	private initialContentsOuterStyle?: string;

	public static defaultProps = {
		baseName: Disclosure.bemBase,
		animate: true,
		open: false,
		updateOnResize: true,
	}

	constructor(props: DisclosureProps) {
		super(props);
		this.state = {
			open: props.open || Disclosure.defaultProps.open,
			lifecycle: props.open ? 'open' : 'closed',
		};
		this.detailsRef = props.detailsRef || React.createRef<HTMLDetailsElement>();
		this.contentsOuterRef = React.createRef<HTMLDivElement>();
	}

	componentDidMount(): void {
		const { animate } = this.props;
		if (animate) {
			this.initialize();
		}
	}

	componentDidUpdate(prevProps: DisclosureProps, prevState: DisclosureState): void {
		const {
			open: propsOpen,
			closingClass = 'closing',
			openingClass = 'opening',
			animate,
		} = this.props;
		const { lifecycle } = this.state;
		if (propsOpen && propsOpen !== prevProps.open) {
			this.setOpen(propsOpen);
		}
		if (animate !== prevProps.animate) {
			if (animate) {
				this.initialize();
			} else {
				this.reset();
				return;
			}
		}
		if (lifecycle !== prevState.lifecycle) {
			const { current: detailsRef } = this.detailsRef;
			if (detailsRef) {
				switch (lifecycle) {
					case 'opening':
						detailsRef.classList.remove(closingClass);
						detailsRef.classList.add(openingClass);
						this.setHeight(this.contentsOuterHeight);
						break;
					case 'closing':
						detailsRef.classList.remove(openingClass);
						detailsRef.classList.add(closingClass);
						this.setHeight(0);
						break;
					case 'open':
						detailsRef.classList.remove(openingClass);
						this.setOpen(true);
						break;
					case 'closed':
						detailsRef.classList.remove(closingClass);
						this.setOpen(false);
						break;
					default:
				}
			}
		}
	}

	private onWindowresize = debounce(() => {
		const { lifecycle } = this.state;
		this.removeHeight();
		this.contentsOuterHeight = this.findHeight();
		if (lifecycle === 'opening') {
			this.setHeight(this.contentsOuterHeight);
		}
		if (lifecycle === 'closing') {
			this.setHeight(0);
		}
	}, Disclosure.RESIZE_DEBOUNCE_DELAY)

	/**
	 * The `<summary>` click handler.
	 *
	 * As soon as a `<details>` element no longer has the `open` attribute,
	 * its inner contents disappear. To prevent this, we transition the height
	 * of the contents via its outer container, delaying the removal of the
	 * `open` attribute until the `transitionend` event triggers.
	 */
	private onSummaryClick = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		const { open, lifecycle } = this.state;
		const { animate } = this.props;
		if (open && !animate) {
			this.setState({ open: false });
			return;
		}
		if (!open && !animate) {
			this.setState({ open: true });
			return;
		}
		if (this.hasTransition()) {
			if (open) {
				switch (lifecycle) {
					// clicked while opening -> cancel open
					case 'opening':
						this.setState({ lifecycle: 'closing' }, () => {
							this.callLifecycleMethod('onOpenCancel');
						});
						break;
					// clicked while closing -> cancel close
					case 'closing':
						this.setState({ lifecycle: 'opening' }, () => {
							this.callLifecycleMethod('onCloseCancel');
						});
						break;
					// clicked while fully open -> begin closing
					case 'open':
						this.setState({ lifecycle: 'closing' }, () => {
							this.callLifecycleMethod('onCloseStart');
						});
						break;
					default:
				}
			} else {
				// clicked while fully closed -> begin opening
				this.setState({ lifecycle: 'opening' }, () => {
					this.callLifecycleMethod('onOpenStart');
				});
			}
		}
	}

	private onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>): void => {
		const { onToggle } = this.props;
		if (onToggle) {
			onToggle(e);
		}
	}

	private onTransitionend = (): void => {
		// was closing -> finish close
		const { lifecycle } = this.state;
		if (lifecycle === 'closing') {
			this.setState({ lifecycle: 'closed' }, () => {
				this.callLifecycleMethod('onCloseEnd');
			});
		}
		// was opening -> finish open
		if (lifecycle === 'opening') {
			this.setState({ lifecycle: 'open' }, () => {
				this.callLifecycleMethod('onOpenEnd');
			});
		}
	}

	// used by componentDidUpdate to avoid linting issues
	private setOpen(open: boolean): void {
		this.setState({ open });
	}

	private setHeight(newHeight: number): void {
		const nextHeight = `${newHeight}px`;
		const { current } = this.contentsOuterRef;
		const { height } = this.state;
		if (current) {
			if (height === nextHeight) return;
			this.setState({ height: nextHeight });
		}
	}

	private initialize(): void {
		const { open } = this.state;
		const { updateOnResize, animate } = this.props;
		if (animate) {
			this.contentsOuterHeight = this.findHeight();
			this.setHeight((open) ? this.contentsOuterHeight : 0);
			if (updateOnResize) {
				window.addEventListener('resize', this.onWindowresize);
			}
		}
	}

	private reset(): void {
		const { updateOnResize } = this.props;
		this.removeHeight();
		if (updateOnResize) {
			window.removeEventListener('resize', this.onWindowresize);
		}
	}

	private removeHeight(): void {
		const { current: contentsOuterRef } = this.contentsOuterRef;
		if (contentsOuterRef) {
			if (this.initialContentsOuterStyle) {
				contentsOuterRef.setAttribute('style', this.initialContentsOuterStyle);
			} else {
				contentsOuterRef.removeAttribute('style');
			}
		}
	}

	private callLifecycleMethod(name: DisclosureLifecycleMethod): void {
		const { [name]: method } = this.props;
		if (method) method(this.state);
	}

	private findHeight(): number {
		const { current: detailsRef } = this.detailsRef;
		const { current: contentsOuterRef } = this.contentsOuterRef;
		const { open } = this.state;
		const isClosed = !open;
		if (detailsRef && contentsOuterRef) {
			if (isClosed) detailsRef.setAttribute('open', 'open');
			const { clientHeight } = contentsOuterRef;
			if (isClosed) detailsRef.removeAttribute('open');
			return clientHeight;
		}
		return 0;
	}

	private hasTransition(): boolean {
		const { current: contentsOuterRef } = this.contentsOuterRef;
		if (contentsOuterRef) {
			const styles = window.getComputedStyle(contentsOuterRef);
			const durations = styles.getPropertyValue('transition-duration').split(/,\s*/);
			return durations.some((v) => Number(v.replace('s', '')) > 0);
		}
		return false;
	}

	private Summary(): JSX.Element {
		const {
			baseName,
			summary,
			variant,
			summaryClass = `${baseName}__${Disclosure.bemElements.summary}`,
			markerClass = `${baseName}__${Disclosure.bemElements.marker}`,
		} = this.props;
		if (isElement(summary, 'summary')) return summary;
		const markerType = (variant === 'panel') ? 'chevron-down' : 'caret-right';
		const markerElement = <Icon variant={markerType} className={markerClass} />;
		const markerPosition = variant === 'panel' ? 'right' : 'left';
		return (
			<BaseSummary
				className={summaryClass}
				marker={markerElement}
				onClick={this.onSummaryClick}
				markerPosition={markerPosition}
			>
				{summary}
			</BaseSummary>
		);
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName,
			contentsInnerClass = `${baseName}__${Disclosure.bemElements.contentsInner}`,
			contentsOuterClass = `${baseName}__${Disclosure.bemElements.contentsOuter}`,
			// options
			variant, animate,
			// elements
			children,
			// props that are used elsewhere
			/* eslint-disable @typescript-eslint/no-unused-vars */
			onCloseStart, onCloseCancel, onCloseEnd,
			onToggle, onOpenStart, onOpenCancel, onOpenEnd,
			detailsRef, summary, summaryClass, updateOnResize, open: propsOpen,
			/* eslint-enable */
			// everything inherited by ReactAttributes & HTML
			...attributes
		} = this.props;
		const { open, height } = this.state;
		const classes = classNames({
			[`${baseName}`]: true,
			[`${baseName}--panel`]: variant === 'panel',
			'reduced-motion': !animate,
		}, className);
		return (
			<BaseDetails
				ref={this.detailsRef}
				className={classes}
				summary={this.Summary()}
				open={open}
				onToggle={this.onToggle}
				{...attributes}
			>
				<div
					style={{ height }}
					className={contentsOuterClass}
					ref={this.contentsOuterRef}
					onTransitionEnd={this.onTransitionend}
				>
					<div className={contentsInnerClass}>
						{children}
					</div>
				</div>
			</BaseDetails>
		);
	}
}
