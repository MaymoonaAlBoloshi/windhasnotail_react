import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const index = ({ size, bgColor, textColor, children }) => {
	const myClass = classnames(
		`bg-${bgColor}-50 text-${textColor}-900 text-${size} p-3`
	);
	return (
		<div className={myClass}>
			<h2>{children}</h2>
		</div>
	);
};

export const PageTitle = index;

PageTitle.propTypes = {
	size: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	children: PropTypes.element,
};

PageTitle.defaultProps = {
	size: 'md',
	bgColor: 'white',
	textColor: 'gray',
	children: 'Add some text',
};
