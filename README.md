# babel-plugin-remove-import-export

[![npm](https://img.shields.io/npm/v/babel-plugin-remove-import-export.svg)](https://www.npmjs.com/package/babel-plugin-remove-import-export)
[![Downloads](https://img.shields.io/npm/dw/babel-plugin-remove-import-export.svg)](https://www.npmjs.com/package/babel-plugin-remove-import-export)

A babel plugin to remove import and export declaration in the source file.

This will be useful if you just want to provide a code snippet without the extra module syntex, for example LeetCode.

__Warning:__ This plugin will break the context of the script, use with caution.

## Example

**In**

```javascript
import { LinkedList } from 'some-lib';

function foo() {
  return new LinkedList(['bar']);
}

export class Solution {
  add(a, b) {
    return a + b;
  }
}

export default foo;
```

**Out**

```javascript
function foo() {
  return new LinkedList(['bar']);
}

class Solution {
  add(a, b) {
    return a + b;
  }
}
```

## Installation

```sh
yarn add -D babel-plugin-remove-import-export
```

Or, use npm:

```sh
npm install babel-plugin-remove-import-export --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
// without options
{
  "plugins": ["remove-import-export"]
}

// with options
{
  "plugins": [
    ["remove-import-export", {
      "removeImport": false,
      "removeExport": false,
      "removeExportDefault": false,
      "preseveNamedDeclaration": false
    }]
  ]
}
```

### Via CLI

```sh
babel --plugins remove-import-export script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["remove-import-export"]
});
```

## Options

### `removeImport`

`boolean`, defaults to `true`.

### `removeExport`

`boolean`, defaults to `true`.

### `removeExportDefault`

`boolean`, defaults to `true`. Set this option to `false` will preserve the default export.

### `preseveNamedDeclaration`

`boolean`, defaults to `true`.

<p><details>
  <summary><b>Example</b></summary>

  Set `preseveNamedDeclaration` to `false` will not keep the declaration after `export` keyword.

  **In**

  ```javascript
  function foo() {
    return 'bar';
  }

  export class Solution {
    add(a, b) {
      return a + b;
    }
  }
  ```

  **Out**

  ```javascript
  function foo() {
    return 'bar';
  }
  ```
</details></p>