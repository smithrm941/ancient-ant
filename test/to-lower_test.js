var expect = require('chai').expect
var toLower = require('../src/to-lower')

describe('toLower()', function (){
  it('should take a string and return with the letters from that string in lower case', function(){
    expect(toLower('--Foo-Bar--')).to.deep.equal('--foo-bar--')
    expect(toLower('fooBar')).to.deep.equal('foobar')
    expect(toLower('__FOO_BAR__')).to.deep.equal('__foo_bar__')
  })
})
