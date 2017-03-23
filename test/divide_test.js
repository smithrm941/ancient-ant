var expect = require ('chai').expect
var divide = require ('../src/divide')

describe('divide()', function(){
  it('should divide the first argument to the second argument and return the quotient', function(){
    expect(divide(4, 2)).to.deep.equal(2)
    expect(divide(60, 15)).to.deep.equal(4)
    expect(divide(1, 5)).to.deep.equal(0.2)
  })

  it('should return the quotient of the first two arguments given if there are more then two arguments', function(){
    expect(divide(4, 2, 3, 4)).to.deep.equal(2)
  })
})
