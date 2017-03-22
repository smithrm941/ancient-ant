var expect = require ('chai').expect
var slice = require ('../src/slice')

describe('slice()', function(){
  it('should take an array with a starting and ending index and return an array with the elements from the starting index to the ending index, not including the ending index', function (){
    expect(slice([1, 2, 3, 4, 5, 6], 1, 5)).to.deep.equal([2, 3, 4, 5])
    expect(slice(['a', 'b', 'c', 'd', 'e','f','g','h'], 0, 4)).to.deep.equal(['a', 'b', 'c', 'd'])
    expect(slice([1, 2, 3, 4, 5, 6, 7], 0, 5)).to.deep.equal([1, 2, 3, 4, 5])
    expect(slice([[1, 2, 3],[4, 5, 6], [7, 8, 9]], 2, 3)).to.deep.equal([[7, 8, 9]])
    expect(slice([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 5, 9)).to.deep.equal([12, 14, 16, 18])
  })

  it('should return an array of everything beginning from the starting index if no ending index is given', function(){
    expect(slice([1, 2, 3, 4, 5, 6], 2)).to.deep.equal([3, 4, 5, 6])
  })

  it('should return the given array if starting and ending indexes are undefined', function(){
    expect(slice([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5])
  })
})
