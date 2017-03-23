var expect = require('chai').expect
var tail = require('../src/tail')

describe('tail()', function(){
  it('should return an array of all elements except the first element of a given array',function(){
    expect(tail([1, 2, 3])).to.deep.equal([2, 3])
    expect(tail([4, 5, 6, 7, 8])).to.deep.equal([5, 6, 7, 8])
  })
})
