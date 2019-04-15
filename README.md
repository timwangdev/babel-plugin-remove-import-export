# babel-plugin-remove-import-export

A babel plugin to remove import and export declaration in the source file.

## Example

**In**

```javascript
import { Map } from 'some-lib';

var twoSumImpl = function(nums, target) {
    const hashMap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        const val = nums[idx];
        const complement = target - val;
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), idx];
        }
        hashMap.set(val, idx);
    };
    throw new Error('No Solution.');
};

export class Solution {
  twoSum(...args) {
    return twoSumImpl(...args);
  }
};

export default twoSum;
```

**Out**

```javascript
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const val = nums[idx];
    const complement = target - val;

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), idx];
    }

    hashMap.set(val, idx);
  }

  ;
  throw new Error('No Solution.');
};

class Solution {
  twoSum(...args) {
    return twoSumImpl(...args);
  }
};
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