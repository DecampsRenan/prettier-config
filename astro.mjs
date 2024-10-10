import defaultConfig from './'

/** @type {import("prettier").Config} */
export default {
	...defaultConfig,
  plugins: [
    ...defaultConfig.plugins,
    'prettier-plugin-astro'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
