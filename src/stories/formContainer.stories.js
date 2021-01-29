import React from 'react';
import { FormContainer } from '../components';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: 'Container/FormContainer',
	component: FormContainer,
	parameters: {
		componentSubtitle: 'this a quote block component with three props',
	},
};

const Template = (args) => <FormContainer {...args} />;

export const Default = Template.bind({});


export const Blue = Template.bind({});
Blue.args = {
	color: 'blue',
};

export const Purple = Template.bind({});
Purple.args = {
	color: 'purple',
};

