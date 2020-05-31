import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	text,
	select,
	boolean,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { Disclosure } from '.';

export default {
	title: 'Disclosure',
	component: Disclosure,
	decorators: [withKnobs],
};

const variantOptions = {
	None: undefined,
	Panel: 'panel',
};

const contents = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit, quibusdam culpa, consequuntur quos voluptate esse explicabo ipsa perspiciatis illo molestias dolorem atque praesentium modi saepe hic suscipit, deserunt debitis.';

const { defaultProps } = Disclosure;

export const Default: React.FunctionComponent = () => (
	<Disclosure
		summary={text('Summary', 'More information')}
		variant={select('Variant', variantOptions, undefined)}
		animate={boolean('Animate', defaultProps.animate)}
		onToggle={action('onToggle')}
		onOpenStart={action('onOpenStart')}
		onOpenCancel={action('onOpenCancel')}
		onOpenEnd={action('onOpenEnd')}
		onCloseStart={action('onCloseStart')}
		onCloseCancel={action('onCloseCancel')}
		onCloseEnd={action('onCloseEnd')}
		open={boolean('Open', false)}
	>
		<p>{text('Contents', contents)}</p>
	</Disclosure>
);
