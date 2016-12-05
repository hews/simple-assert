const expect  = require('chai').expect,
      sassert = require('../dist/simple-assert');
 
describe('Simple Assert (simple-assert)', () => {
  describe('.ok', () => {
    it('returns a string message', () => {
      expect(sassert.ok()).to.be.a('string');
    });
  });
});
