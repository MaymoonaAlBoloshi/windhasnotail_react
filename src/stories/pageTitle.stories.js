import React from 'react';
import { PageTitle } from '../components';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import '../index.css';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: 'Typography/PageTitle',
	component: PageTitle,
	args: {
		children: 'page ',
	},
};

const Template = (args) => <PageTitle {...args} />;
export const Default = Template.bind({});

Default.args = {
	children: 'default children',
	bgColor: 'yellow',
	textColor: 'yellow',
};

// Each story then reuses that template
