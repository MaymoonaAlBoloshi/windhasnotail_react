import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LeftArrowCircle from '../icons/arrowCircleLeft';

const index = ({ color, children }) => {
	const container = classnames(
		`shadow-md place-self-center rounded mx-60 my-12 p-12 ring-4 ring-${color}-300 relative`
	);
	const icon = classnames(
		`w-10 h-10 transition duration-500 ease-in-out hover:bg-${color}-300 hover:text-white transform hover:-translate-1 hover:scale-110  rounded-full absolute bg-white -top-5 -left-5 text-${color}-300`
	);
	return (
		<div className={container}>
			<h2>{children}</h2>
			<div className={icon}>
				<LeftArrowCircle />
			</div>
		</div>
	);
};

export const FormContainer = index;

FormContainer.propTypes = {
	color: PropTypes.string,
	children: PropTypes.element,
};

FormContainer.defaultProps = {
	color: 'gray',
	children: 'Add some text',
};
