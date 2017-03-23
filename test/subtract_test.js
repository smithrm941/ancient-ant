var expect = require('chai').expect
var subtract = require ('../src/subtract')

describe('subtract()', function(){
  it('should return the difference between two arguments', function(){
    expect(subtract(6, 4)).to.deep.equal(2)
    expect(subtract(10, -14)).to.deep.equal(24)
  })

  it('should only return the difference between the first two arguments if there are more than two arguments', function(){
    expect(subtract(6, 4, 10, 12)).to.deep.equal(2)
  })
})
