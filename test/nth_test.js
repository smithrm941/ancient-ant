var expect = require ('chai').expect
var nth = require ('../src/nth')

describe('nth()', function(){
  it('should return the element at index n of a given array. If n is negative, the nth element from the end is returned', function(){
    expect(nth(['a', 'b', 'c', 'd'], 1)).to.deep.equal('b')
    expect(nth(['a', 'b', 'c', 'd'], -1)).to.deep.equal('d')
    expect(nth([1, 2, 3, 4, 5, 6, 7, 8], 2)).to.deep.equal(3)
    expect(nth([2, 4, 6, 8, 10], -3)).to.deep.equal(6)
    expect(nth([[1, 2, 3],[4, 5, 6],["no more numbers", "ok"]], 2)).to.deep.equal(["no more numbers", "ok"])
  })
})
