/**
 *
 */
module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	plugins: [
		'babel',
		'render-if'
	],
	rules: {
		'no-tabs': 'off',
		'arrow-parens': 'off',
		'indent': ['error', 'tab', {SwitchCase: 1}],
		'comma-dangle': ['error', 'never'],
		'no-multiple-empty-lines': ['error', {max: 3}],
		'object-curly-spacing': ['error', 'never'],
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'render-if/prefer-lazy': 'error'
	}
}
