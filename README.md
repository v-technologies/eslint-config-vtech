eslint-config-vtech
===================

The ESLint config used for front-end projects at V-Technologies.

This config is heavily based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), except for some custom rules which better fits our coding style.

Setup
-----

Install the package and its peer dependencies:

```sh
npm install --save-dev eslint-config-vtech babel-eslint eslint-plugin-babel eslint-plugin-react
```

Configure ESLint by adding `.eslintrc` at the root of your project:

```json
{
    "extends": "vtech"
}
```
