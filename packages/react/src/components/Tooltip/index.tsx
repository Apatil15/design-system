import React from 'react';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { BasePopper, BasePopperProps } from '../BasePopper';
import {
	getProp, useTriggers, useForwardedRef, innerText, prefix,
} from '../../utilities';

export type Triggers =
	| 'click'
	| 'focus'
	| 'focusin'
	| 'manual'
	| 'mouseenter'
	| 'pointerenter'
export interface TooltipProps extends BasePopperProps {
	/** The base class name according to BEM conventions. */
	baseName?: string;
	/** A className to apply to the content. Default will be `${baseName}__content`. */
	contentClass?: string;
	/** A className to apply to the arrow. Default will be `${baseName}__arrow`. */
	arrowClass?: string;
	/**
	 * Indicates that the tooltip is labelling the reference. If `false`, the
	 * tooltip will be used as description.
	 * @see https://w3c.github.io/aria-practices/#names_and_descriptions
	 */
	asLabel?: boolean;
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the tooltip's visibility must be
	 * controlled via `isOpen`. Default is `"focus pointerenter"`.
	 */
	trigger?: string;
	/**
	 * The time in milliseconds before the tooltip should disappear. Use this to
	 * ensure that users can move their cursor from the reference to the tooltip
	 * without it disappearing.
	 */
	hideDelay?: number;
}

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((
	{
		baseName = prefix('tooltip'),
		contentClass = `${baseName}__content`,
		arrowClass = `${baseName}__arrow`,
		modifiers,
		placement = 'top',
		asLabel = false,
		trigger = 'focus pointerenter',
		hideDelay = 200,
		reference,
		isOpen = false,
		id: userId,
		children,
		className,
		...props
	}: TooltipProps, ref,
) => {
	const [tooltip, setTooltip] = useForwardedRef(ref);
	const [offsetY, setOffsetY] = React.useState<number>(6);
	const { current: id } = React.useRef(userId || uniqueId(`${baseName}-`));
	const open = useTriggers({
		reference, trigger, isOpen, tooltip, hideDelay,
	});

	const ariaAttribute = React.useMemo(() => {
		if (asLabel) return 'aria-labelledby';
		return 'aria-describedby';
	}, [asLabel]);

	const offsetMod = React.useMemo(() => ({
		name: 'offset',
		options: {
			offset: [
				0,
				offsetY,
			],
		},
	}), [offsetY]);

	const arrowMod = React.useMemo(() => ({
		name: 'arrow',
		options: {
			element: `.${arrowClass}`,
		},
	}), [arrowClass]);

	React.useLayoutEffect(() => {
		if (tooltip) {
			const token = parseInt(getProp('tooltip-offset-y', tooltip), 10);
			if (token) setOffsetY(token);
		}
	}, [tooltip]);

	/**
	 * Attach aria labelling and describing attributes.
	 * When rendered `asLabel`, the tooltip will name the reference element. To
	 * accomplish this, the reference element will have an `aria-label` when
	 * closed and `aria-labelledby` when open.
	 * When rendered as a description (`asLabel=false`), the tooltip will
	 * describe the reference element via `aria-describedby` on open.
	 */
	React.useLayoutEffect(() => {
		if (reference && reference instanceof Element) {
			const currentRefs = reference.getAttribute(ariaAttribute);
			if (currentRefs && !currentRefs.split(/\s+/g).includes(id)) return;
			const currentLabel = reference.getAttribute('aria-label');
			if (open) {
				reference.setAttribute(ariaAttribute, id);
				reference.removeAttribute('aria-label');
			} else {
				reference.removeAttribute(ariaAttribute);
				if (asLabel && children) {
					reference.setAttribute('aria-label', currentLabel || innerText(children));
				}
			}
		}
	}, [asLabel, children, id, open, reference, ariaAttribute]);

	if (!children) return null;

	return (
		<BasePopper
			aria-hidden="true"
			className={classNames(baseName, className)}
			role="tooltip"
			modifiers={[...(modifiers || []), offsetMod, arrowMod]}
			placement={placement}
			reference={reference}
			isOpen={open}
			id={id}
			ref={setTooltip}
			{...props}
		>
			<div className={contentClass}>{ children }</div>
			<div className={arrowClass} />
		</BasePopper>
	);
});