module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
		{
			name: '@storybook/addon-storysource',
			options: {
				loaderOptions: {
					prettierConfig: { printWidth: 80, singleQuote: false },
					injectStoryParameters: false,
				},
			},
		},
	],
	webpackFinal: (config) => {
		return {
			...config,
			module: {
				...config.module,
				rules: [
					// Filter out the default .css rule.
					...config.module.rules.filter((rule) => /\.css$/ !== rule.test),
					// Add our own css rule which in turn will read the postcss.config.js from project root.
					{
						test: /\.css1$/,
						exclude: [/\.module\.css$/, /@storybook/],
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: { importLoaders: 1, sourceMap: false },
							},
							{
								loader: 'postcss-loader',
								options: {
									ident: 'postcss',
									sourceMap: false,
								},
							},
						],
					},
				],
			},
		};
	},
};
