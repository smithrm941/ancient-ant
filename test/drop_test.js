var expect = require ('chai').expect
var drop = require ('../src/drop')

describe('drop()', function(){
  it('given parameters array and n, should drop the first n elements of the given array', function(){
    expect(drop([1, 2, 3], 2)).to.deep.equal([3])
    //expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
    //expect(drop(['no', 'strings', 'attached']), 1).to.deep.equal(['strings', 'attached'])
  })

  it('should return array with first element dropped if n is not provided', function(){
    expect(drop([1, 2, 3])).to.deep.equal([2, 3])
    expect(drop(['no', 'strings', 'attached'])).to.deep.equal(['strings', 'attached'])
    expect(drop([[2, 4],[6, 8],[10, 12], [1, 2, 3]])).to.deep.equal([[6, 8],[10, 12],[1, 2, 3]])
  })

  it('should return an empty array if n is greater than or equal to the length of the array', function(){
    expect(drop([1, 2, 3], 5)).to.deep.equal([])
    expect(drop([[1, 2, 3],[4,5,6]], 2)).to.deep.equal([])
  })
})
