var expect = require('chai').expect
var snakeCase = require('../src/snake-case')

describe('snakeCase()', function(){
  it('should return a string containing only lower-case letters or numbers sepearted by a dash', function(){
    expect(snakeCase('some string')).to.deep.equal('some_string')
    expect(snakeCase('Foo Bar')).to.deep.equal('foo_bar')
    expect(snakeCase('_*_&Our_$String')).to.deep.equal('our_string')
    expect(snakeCase('Way back in 1949...')).to.deep.equal('way_back_in_1949')
  })
})
