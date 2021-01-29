import React, { Component } from 'react';

class index extends Component {
fg

	render() {
		return (
			<nav class='flex w-full items-center justify-between px-6 h-16 shadow-sm  text-grey-700 border-t-4 border-blue-200 '>
				<h2>logo</h2>
				<ul colass='flex w-2/6 justify-around'>
					<li class='text-gray-400 hover:text-blue-600 border-b-2 hover:border-b-4  border-transparent hover:border-blue-600 semibold cursor-pointer transform hover:scale-110'>
						link one
					</li>
					<li class='text-gray-400 hover:text-blue-600 border-b-2 hover:border-b-4  border-transparent hover:border-blue-600 semibold cursor-pointer transform hover:scale-110'>
						link twe
					</li>
					<li class='text-gray-400 hover:text-blue-600 border-b-2 hover:border-b-4  border-transparent hover:border-blue-600 semibold cursor-pointer transform hover:scale-110'>
						one
					</li>
					<li class='text-gray-400 hover:text-blue-600 border-b-2 hover:border-b-4  border-transparent hover:border-blue-600 semibold cursor-pointer transform hover:scale-110'>
						one
					</li>
				</ul>
			</nav>
		);
	}
}

export const Navbar = index;

// extract nav link to separate component
// add props for nav and nav link
