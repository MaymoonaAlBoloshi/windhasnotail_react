import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const index = ({ quote, author, color }) => {
	const quotationMark = classnames(
		`text-${color}-200 text-8xl rotate-45 absolute top-4 left-0 `
	);
	const quoteMsg = classnames(
		`text-${color}-900 text-lg font-semibold quote inline `
	);
	const block = classnames(
		`border-${color}-200 relative p-6 italic border-l-4 bg-${color}-50 text-${color}-900 quote `
	);

	return (
		<blockquote className={block}>
			<p className={quoteMsg}>
				<span style={{ lineHeight: 0 }} className={quotationMark}>
					&quot;
				</span>
				{quote}
			</p>
			<p>-- {author}</p>
		</blockquote>
	);
};

export const QuoteBlock = index;

QuoteBlock.propTypes = {
	author: PropTypes.string,
	quote: PropTypes.string,
	color: PropTypes.string,
};

QuoteBlock.defaultProps = {
	author: 'The Awesome one',
	quote: 'there is awesomeness in the universe',
	color: 'blue',
};
