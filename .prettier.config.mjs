/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
	jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
	bracketSameLine: false,
  arrowParens: 'always',
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'strict',
	endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports'],

	// @trivago/prettier-plugin-sort-imports
	importOrder: [
		// react related packages
		'^react$',
		'^react-dom',
		'^react-.*$',

		// plasmo packages grouped together
		'^@plasmohq/.+$',

		// npm packages
		"<THIRD_PARTY_MODULES>",

		// aliases path ('@/components/etc..', '~lib/etc...')
		'^(@/|~)(.+)$',
		
		// loader specific imports ('raw:../', 'data-text:../')
		'^(.+:.+)$',
		
		// relative imports
		"^[./]"
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};


