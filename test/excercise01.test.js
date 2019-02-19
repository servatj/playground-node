const assert = require('assert');
const { reverseNumber } = require('../src/excercise01')

it('should reverse 32243 and return 34223', () => {
   const result  = reverseNumber(32243);
   assert.equal( result , 34223 );
});

it('should reverse 32245 and return 54223', () => {
   const result  = reverseNumber(32245);
   assert.equal( result , 54223 );
});
