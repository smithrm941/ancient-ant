var expect = require ('chai').expect
var reverse = require ('../src/reverse')

describe('reverse()', function (){
  it('should take the given array and reverse it', function(){
    expect(reverse([1, 2, 3])).to.deep.equal([3, 2, 1])
  })

  it('should return the original array when there is only one item within the array', function(){
    expect(reverse(['apple'])).to.deep.equal(['apple'])
  })
})
