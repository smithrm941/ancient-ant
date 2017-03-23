var expect = require ('chai').expect
var multiply = require ('../src/multiply')

describe('multiply()', function(){
  it('should multiply the two arguments and return the product', function(){
    expect(multiply(6, 4)).to.deep.equal(24)
    expect(multiply(-4, 2)).to.deep.equal(-8)
  })

  it('should only multiply the frist two arguments if there are more then two arguments', function(){
    expect(multiply(1, 2, 3)).to.deep.equal(2)
  })
})
