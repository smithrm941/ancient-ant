var expect = require ('chai').expect
var camelCase = require ('../src/camel-case')

describe('camelCase', function(){
  it('should take a string and return sting in camelCase', function(){
    expect(camelCase('Foo Bar')).to.deep.equal('fooBar')
    expect(camelCase('--foo-bar--')).to.deep.equal('fooBar')
    expect(camelCase('__FOO___BAR__')).to.deep.equal('fooBar')
  })
})
