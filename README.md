# babel-plugin-remove-import-export

A babel plugin to remove import and export declaration in the source file.

This will be useful if you just want to provide a code snippet without the extra module syntex, for example LeetCode.

__Warning:__ This plugin will break the context of the script, use with caution.

## Example

**In**

```javascript
import { LinkedList } from 'some-lib'

function foo(a, b) {
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
function foo(a, b) {
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
{
  "plugins": ["remove-import-export"]
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