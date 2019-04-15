const { transform } = require('@babel/core');

const example = `
import { Map } from 'some-lib';

var twoSum = function(nums, target) {
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
`;

it('works', () => {
  const {code} = transform(example, {plugins: [require('../index')]});
  expect(code).toMatchSnapshot();
});
