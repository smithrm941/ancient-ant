var expect = require ('chai').expect
var add = require ('../src/add')

describe('add()', function(){
  it('should add two arguments together', function(){
    expect(add(6, 4)).to.deep.equal(10)
    expect(add(-6, 4)).to.deep.equal(-2)
    expect(add(723, 946)).to.deep.equal(1669)
  })

  it('should only add the first two arguments if additional arguments are used', function(){
    expect(add(1, 2, 3)).to.deep.equal(3)
    expect(add(10, 42, -52)).to.deep.equal(52)
  })
})
