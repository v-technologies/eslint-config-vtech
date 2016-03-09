/**
 *
 */
module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	plugins: [
		'babel'
	],
	rules: {
		'indent': [2, 'tab', {SwitchCase: 1}],
		'comma-dangle': [2, 'never'],
		'no-multiple-empty-lines': [2, {max: 3}],
		'object-curly-spacing': [2, 'never'],
		'react/jsx-indent-props': [2, 'tab']
	}
}