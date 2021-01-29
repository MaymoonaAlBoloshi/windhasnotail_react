import React from 'react';

const index = ({children}) => {
	return (
		<div class=' w-full py-6 justify-between px-6 h-screen  border-b border-gray-200 text-grey-700'>
			{children}
		</div>
	);
};

export const Main = index;
