const bubbleSort = require('../bubble-sort');
const assert = require('chai').assert;

describe('Buble sorting', function() {
    it('sort empty array', function() {
        assert.deepEqual(bubbleSort([]), []);
    });
    it('sort', function() {
        assert.deepEqual(bubbleSort([2,1,4,9,8,3]), [1,2,3,4,8,9]);
    });
});