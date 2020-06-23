import React from 'react';
import { Icon } from '../Icon';

export interface BaseOptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
	/** The option's value. */
	value: React.ReactText;
	/** Indicates whether the option is currently selected. */
	isSelected?: boolean;
	/** The class name for the selection marker. */
	markerClass?: string;
	/** The class name for the contents of the option. */
	contentsClass?: string;
}

/**
 * An option is "a selectable item in a listbox." Used in `BaseListbox`. Similar to
 * an `<option>` element.
 * @ARIA https://w3c.github.io/aria/#option
 */
export const BaseOption = React.forwardRef<HTMLLIElement, BaseOptionProps>(({
	isSelected = false,
	children,
	markerClass,
	contentsClass,
	value,
	...attributes
}: BaseOptionProps, ref) => (
	<li
		role="option"
		aria-selected={(isSelected) ? 'true' : 'false'}
		ref={ref}
		{...attributes}
	>
		{ isSelected && <Icon variant="check" className={markerClass} /> }
		<span className={contentsClass}>{ children || value }</span>
	</li>
));
