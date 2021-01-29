import '../src/index.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
};
