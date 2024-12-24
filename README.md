# Personal config files

I use this config in all my projects. No need to copy/paste anymore 😄

## Supported tools

- [x] Prettier
- [ ] ESLint
- [ ] Typescript

## Install

```sh
npm i -D @decampsrenan/prettier-config
```

## Usage

### Prettier

```json
// package.json
{
  "name": "...",
  "prettier": "@decampsrenan/prettier-config"
}
```

Or if you need more control on the settings:

```js
// .prettierrc.mjs
import config from "@decampsrenan/prettier-config"

export default {
  ...config
  // Override with your custom needs here
}
```

Then run the following commands to check or update files if needed:

```sh
npx prettier -c ./ # Check if there is some files to update
npx prettier -w ./ # Update files
```