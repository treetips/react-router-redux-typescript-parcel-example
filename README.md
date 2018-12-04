# react-router-redux-typescript-parcel-example

This is a simple and modern example using parcel, typescript, react, redux.

By VSCode and prettier and TSLint, realtime code format and realtime sentence structure check and rearranging of unused import are carried out in real time.

これは、parcel, typescript, react, redux を使った、シンプルでモダンなサンプルです。

VSCode と prettier と TSLint によって、リアルタイムに整形と構文チェックと未使用 import の整理が行われます。

## Features

- npm
- typescript v3
- parcel v1.9
- react v16
- react-router v4
- react-router-redux v5
- redux v4
- prettier
- tslint
- scss
- postcss

## Requirement

- Google Chrome
- Visual Studio Code
- npm

### Install Google Chrome addon

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja

### Install VSCode addons

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

## Usage

```bash
git clone https://github.com/treetips/react-router-redux-typescript-parcel-example.git
cd react-router-redux-typescript-parcel-example
npm install
npm start
```

## Parcel tips

### Autoprefixer

https://parceljs.org/transforms.html#postcss

### Solve node_modules path of scss

https://github.com/parcel-bundler/parcel/issues/39#issuecomment-405922171

parcel-bundler v1.9.7 uses `.sassrc.js` as a substitute for in what cannot solve a pass of node_modules in `.sassrc` .

parcel-bundler v1.9.7 では、 `.sassrc` を記述しても、scss 内で import した際に node_modules のパスが解決できないため、`.sassrc.js` を使う事でその問題を回避しています。

```
npm i -D node-sass-package-importer
```

### .sassrc.js

```js
const packageImporter = require("node-sass-package-importer")

module.exports = {
  importer: [packageImporter()],
}
```

```scss
@import "~normalize.css/normalize.css";
```
