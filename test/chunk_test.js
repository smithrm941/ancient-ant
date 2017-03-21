var expect = require ('chai').expect
var chunk = require ('../src/chunk')

describe('chunk()', function(){
  it('should be a function', function(){
    expect(chunk).to.be.a('function')
  })

  it('should split an array of elements into groups the length of size', function(){
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
  })

  it('should have a final chunk of remaining elements if array can\'t be split evenly', function(){
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a','b','c'], ['d']])
  })

  it('should return an empty array if anything other than an array is used in place of the array', function(){
    expect(chunk('apple banana')).to.deep.equal([])
    expect(chunk(1234)).to.deep.equal([])
  })

  it('should return an array of one element arrays when number is not defined', function(){
    expect(chunk([1, 2, 3, 4])).to.deep.equal([[1],[2],[3],[4]])
  })

  it('should return an empty array if number is negative', function(){
    expect(chunk([1, 2, 3, 4], -2)).to.deep.equal([])
  })
})
