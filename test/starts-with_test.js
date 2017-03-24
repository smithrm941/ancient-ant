var expect = require ('chai').expect
var startsWith = require ('../src/starts-with')

describe('startsWith', function (){
  it('should return true if the first letter of string matches the target', function (){
    expect(startsWith('abc', 'a')).to.deep.equal(true)
    expect(startsWith('chai', 'c')).to.deep.equal(true)
  })

  it('should return true when the letter in the given position matches the target', function (){
    expect(startsWith('abc', 'b', 1)).to.deep.equal(true)
    expect(startsWith('vanilla', 'n', 2)).to.deep.equal(true)
    expect(startsWith('vanilla', 'll', 4)).to.deep.equal(true)
  })
})
