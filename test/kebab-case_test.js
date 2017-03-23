var expect = require('chai').expect
var kebabCase = require('../src/kebab-case')

describe('kebabCase()', function(){
  it('should return a string containing only lower-case letters or numbers sepearted by a dash', function(){
    expect(kebabCase('some string')).to.deep.equal('some-string')
    expect(kebabCase('Foo Bar')).to.deep.equal('foo-bar')
    expect(kebabCase('_*_&Our_$String')).to.deep.equal('our-string')
    expect(kebabCase('Way back in 1949...')).to.deep.equal('way-back-in-1949')
  })
})
