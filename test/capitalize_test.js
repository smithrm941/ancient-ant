var expect = require('chai').expect
var capitalize = require('../src/capitalize')

describe('capitalize()', function(){
  it('should return a string with the first letter in the first word capitalized and the rest lower case', function(){
    expect(capitalize('apple pie')).to.deep.equal('Apple pie')
    expect(capitalize('APPLE PiE')).to.deep.equal('Apple pie')
    expect(capitalize('aPPle pIE')).to.deep.equal('Apple pie')
    
  })
})
