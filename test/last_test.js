var expect = require ('chai').expect
var last = require ('../src/last')

describe('last()', function(){
  it('should return the last element of an array', function(){
    expect(last([1, 2, 3])).to.deep.equal(3)
    expect(last(['a', 'b', 'c'])).to.deep.equal('c')
    expect(last([['a','b','c'],[1, 2, 3],['you','and','me']])).to.deep.equal(['you', 'and', 'me'])
  })

  it('should return undefined if input is not an array', function(){
    expect(last(123)).to.be.undefined
    expect(last(1, 2, 3)).to.be.undefined
  })
})
