var expect = require ('chai').expect
var min = require ('../src/min')

describe('min()', function(){
  it('should return the smallest value from a given array of numbers', function(){
    expect(min([2.5, 4, 0.5, 1])).to.deep.equal(0.5)
    expect(min([24, 3, 9, 40, 6, 85])).to.deep.equal(3)
    expect(min([2.5, -4, 1, 0.5])).to.deep.equal(-4)
    expect(min([8, 17, 45, 1, 5, 7, 19, 1, 47])).to.deep.equal(1)
  })

  it('should return undefined if array is empty or falsey', function(){
    expect(min([])).to.be.undefined
    expect(min(false)).to.be.undefined
    expect(min()).to.be.undefined
  })
})
