var expect = require ('chai').expect
var concat = require ('../src/concat')

describe('concat()', function(){
  it('should take an array and concatenate given values into that array', function(){
    expect(concat([1], 2 , [3], [[4]])).to.deep.equal([1, 2, 3, [4]])
    expect(concat([1, 2], 2, [3, 4, 5], [[6, 7],[8]])).to.deep.equal([1, 2, 2, 3, 4, 5, [6, 7], [8]])
    expect(concat(['Learners Guild'], 'laptops', 'giant monitors', [['desks', 'people']])).to.deep.equal(['Learners Guild', 'laptops', 'giant monitors', ['desks', 'people']])
  })
})
