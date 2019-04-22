const { transform } = require('@babel/core');

const example = `
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
`;

it('works with no options', () => {
  const { code } = transform(example, { plugins: [require('../index')] });
  expect(code).toMatchSnapshot();
});

it('works with removeImport false options', () => {
  const { code } = transform(example, {
      plugins: [[require('../index'), { removeImport: false }]]
  });
  expect(code).toMatchSnapshot();
});

it('works with removeExport false options', () => {
  const { code } = transform(example, {
      plugins: [[require('../index'), { removeExport: false }]]
  });
  expect(code).toMatchSnapshot();
});

it('works with removeExportDefault false options', () => {
  const { code } = transform(example, {
      plugins: [[require('../index'), { removeExportDefault: false }]]
  });
  expect(code).toMatchSnapshot();
});


it('works with preseveNamedDeclaration false options', () => {
  const { code } = transform(example, {
      plugins: [[require('../index'), { preseveNamedDeclaration: false }]]
  });
  expect(code).toMatchSnapshot();
});