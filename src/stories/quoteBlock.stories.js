import React from 'react';
import { QuoteBlock } from '../components';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: 'TextComponents/QuoteBlock',
	component: QuoteBlock,
	parameters: {
		componentSubtitle: 'this a quote block component with three props',
	},
};

const Template = (args) => <QuoteBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
	quote:
	'Quote Block, a block for quotes about a product usually telling the consumer to trust us, I am just trying to make the text long',
	author: 'someone who can talk',
	color: 'black',
};

export const Blue = Template.bind({});
Blue.args = {
	quote:
		'Quote Block, a block for quotes about a product usually telling the consumer to trust us, I am just trying to make the text long',
	author: 'someone who can talk',
	color: 'blue',
};

export const Purple = Template.bind({});
Purple.args = {
	quote:
		'Quote Block, a block for quotes about a product usually telling the consumer to trust us, I am just trying to make the text long',
	author: 'someone who can talk',
	color: 'purple',
};


export const ShortText = Template.bind({});
ShortText.args = {
	quote:
		'hey!!',
	author: 'someone who can talk',
	color: 'red',
};
