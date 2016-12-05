# Simple Assert for Node

As a guide, use the [Node.js Assert API][api]:

- assert(value[, message]) *an alias of assert.ok*
- assert.deepEqual(actual, expected[, message])
- assert.deepStrictEqual(actual, expected[, message])
- assert.doesNotThrow(block[, error][, message])
- assert.equal(actual, expected[, message])
- assert.fail(actual, expected, message, operator)
- assert.ifError(value)
- assert.notDeepEqual(actual, expected[, message])
- assert.notDeepStrictEqual(actual, expected[, message])
- assert.notEqual(actual, expected[, message])
- assert.notStrictEqual(actual, expected[, message])
- assert.ok(value[, message])
- assert.strictEqual(actual, expected[, message])
- assert.throws(block[, error][, message])

Node.js Assert is not meant to be used as a general testing
library. But this guy is!

<!-- LINKS -->

[api]: https://nodejs.org/api/assert.html

