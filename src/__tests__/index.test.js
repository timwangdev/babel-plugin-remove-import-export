const { transform } = require('@babel/core');

const example = `
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
`;

it('works', () => {
  const {code} = transform(example, {plugins: [require('../index')]});
  expect(code).toMatchSnapshot();
});
