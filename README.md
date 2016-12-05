# Simple Assert for Node

As a guide, use the [Node.js Assert API][api]:

- assert(value[, message]) *an alias of assert.ok*
- assert.ok(value[, message])
- assert.equal(actual, expected[, message])
- assert.notEqual(actual, expected[, message])
- assert.strictEqual(actual, expected[, message])
- assert.notStrictEqual(actual, expected[, message])
- assert.deepEqual(actual, expected[, message])
- assert.notDeepEqual(actual, expected[, message])
- assert.deepStrictEqual(actual, expected[, message])
- assert.notDeepStrictEqual(actual, expected[, message])
- assert.throws(block[, error][, message])
- assert.doesNotThrow(block[, error][, message])
- assert.fail(actual, expected, message, operator)
- assert.ifError(value)

However, add two more useful assertions:

- assert.isPrimitive(actual, expected[, message])
- assert.isInstanceOf(actual, expected[, message])

Node.js Assert is not meant to be used as a general testing
library. But this guy is!

Most importantly, are the configurations.

- outputSuccess: default STDOUT
- outputFail:    default STDERR
- output: (convenience to set both of the above)
- color:  default true
- differ: default null (reference diff library here)
- logger: default null (reference log library here)
- throw:  default false (don't print output, throw AssertionError)

For simplicity's sake, there are no dependencies. That does mean, however,
that you would need to download and install a differ, a logger, etc. if
you want to integrate them. And in order to normalize their interfaces, you
use them like this:

- Suggested differ: https://www.npmjs.com/package/diff
- Suggested logger: if you must, https://github.com/winstonjs/winston

```js
const JsDiff = require('diff');

assert.differ = function (actual, expected, type) {
  if (type === 'boolean' || type === 'number')
    return function () { return 'Expected ' + expected + ', but received ' + actual '.'; };
  if (type === 'string')
    return function () { return JsDiff.diffChars(actual, expected); };
  // &c.
};

// Possible types: 'boolean', 'number', 'string', 'array', 'object', 
//                 'primitive', 'class'

assert.logger = // … ;
```

<!-- LINKS -->

[api]: https://nodejs.org/api/assert.html
