var expect = require ('chai').expect
var range = require('../src/range')

describe('range()', function(){
  it('should return a range of numbers progressing from 0, incrementing or decrementing by 1, up to but not including end if end and step are not provided', function (){
    expect(range(4)).to.deep.equal([0, 1, 2, 3])
    expect(range(-4)).to.deep.equal([0, -1, -2, -3])
  })

  it('should return a range of numbers progressing from start up to but not including end, incrementing or decrementing by 1 if step is not provided', function (){
    expect(range(1, 5)).to.deep.equal([1, 2, 3, 4])
    expect(range(5, 10)).to.deep.equal([5, 6, 7, 8, 9])
    expect(range(-1, 5)).to.deep.equal([-1, 0, 1, 2, 3, 4])
    expect(range(1, -5)).to.deep.equal([1, 0, -1, -2, -3, -4])
    expect(range(-1, -5)).to.deep.equal([-1, -2, -3, -4])
  })

  it('should return a range of numbers progressing from start, up to, but not including, end, incrementing or decrementing by step', function(){
    expect(range(0, 20, 5)).to.deep.equal([0, 5, 10, 15])
    expect(range(-1, 5, 1)).to.deep.equal([-1, 0, 1, 2, 3, 4])
    expect(range(3, -9, -3)).to.deep.equal([3, 0, -3, -6])
    expect(range(20, 5, -5)).to.deep.equal([20, 15, 10])
    expect(range(-5, -15, -3)).to.deep.equal([-5, -8, -11, -14])
    expect(range(-21, -7, 7)).to.deep.equal([-21, -14])
  })
})
