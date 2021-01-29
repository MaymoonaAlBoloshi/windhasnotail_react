import React, { Component } from 'react';
import {
	Navbar,
	Drawer,
	Main,
	PageTitle,
	QuoteBlock,
	FormContainer,
} from '../../components';

class index extends Component {
	render() {
		return (
			<div>
				<div>{/* <Drawer /> */}</div>
				<div>
					<div>
						<Navbar />
					</div>
					<div>
						<Main>
							<PageTitle bgColor='white' size='3xl' textColor='blue'>
								The start of a component library
							</PageTitle>
							<br />
							<PageTitle bgColor='white' size='2xl' textColor='gray'>
								Block quotes
							</PageTitle>
							<br />
							<div class='flex justify-between'>
								<QuoteBlock
									color='yellow'
									author='the dev'
									quote='tailwind is awesome'
								/>
								<br />
								<QuoteBlock
									color='green'
									author='the dev'
									quote='Life is awesome'
								/>
								<br />
								<QuoteBlock
									color='red'
									author='the dev'
									quote='this one should be a longer one to see if it is awesome'
								/>
								<br />
								<QuoteBlock author='the dev' quote='tailwind is awesome' />
								<br />
							</div>
								<PageTitle bgColor='white' size='2xl' textColor='gray'>
									container
								</PageTitle>
								<FormContainer color="blue"></FormContainer>
						</Main>
					</div>
				</div>
			</div>
		);
	}
}

export const Home = index;
