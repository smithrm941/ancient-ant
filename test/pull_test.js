var expect = require ('chai').expect
var pull = require ('../src/pull')

describe('pull()', function(){
  it('should return the given array with the given additional arguments removed', function(){
    expect(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')).to.deep.equal(['b', 'b'])
    expect(pull([1, 2, 3, 1, 2, 3], 1, 3)).to.deep.equal([2, 2])
    expect(pull(['the', 'cat', 'in', 'the', 'hat'], 'cat', 'in', 'hat')).to.deep.equal(['the', 'the'])
    expect(pull(['we', 'will','remove', 'everything'], 'we', 'will', 'remove', 'everything')).to.deep.equal([])
  })

  it('should return the given array unchanged if no additional arguments are included or if additional arguments are not in the array', function (){
    expect(pull([1, 2, 3, 4], 8)).to.deep.equal([1, 2, 3, 4])
    expect(pull(['keep', 'everything'])).to.deep.equal(['keep', 'everything'])
  })

  it('should ignore additonal arguments that are not within the array and return the given array with the remaining arguments removed', function(){
    expect(pull([1, 2, 3, 4], 8, 2)).to.deep.equal([1, 3, 4])
  })
})
