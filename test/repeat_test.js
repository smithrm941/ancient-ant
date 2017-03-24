var expect = require('chai').expect
var repeat = require('../src/repeat')

describe('repeat()', function(){
  it('should repeat the given string n times', function(){
    expect(repeat('*', 3)).to.deep.equal('***')
    expect(repeat('abc', 2)).to.deep.equal('abcabc')
    expect(repeat('Leave Britney alone!', 5)).to.deep.equal('Leave Britney alone!Leave Britney alone!Leave Britney alone!Leave Britney alone!Leave Britney alone!')
  })
})
