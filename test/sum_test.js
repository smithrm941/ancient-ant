var expect = require ('chai').expect
var sum = require ('../src/sum')

describe('sum()', function(){
  it('should compute the sum of the values within an array', function(){
    expect(sum([1, 2, 3, 4])).to.deep.equal(10)
    expect(sum([3, 5, -2, -1, 10])).to.deep.equal(15)
  })

  it('return undefined if argument is not an array', function(){
    expect(sum('not', 'an', 'array')).to.be.undefined
    expect(sum(2334154)).to.be.undefined
    expect(sum(2, 3, 3, 4, 1, 5, 4)).to.be.undefined
  })
})
