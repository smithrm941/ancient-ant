var expect = require ('chai').expect
var lowerFirst = require ('../src/lower-first')

describe('lowerFirst', function(){
  it('should return the string given with the first letter of the first word in lowercase and the rest unchanged', function (){
    expect(lowerFirst('Fred')).to.deep.equal('fred')
    expect(lowerFirst('FRED')).to.deep.equal('fRED')
    expect(lowerFirst('Molly Holly Bally')).to.deep.equal('molly Holly Bally')
    expect(lowerFirst('THIS iS A 100$ bill')).to.deep.equal('tHIS iS A 100$ bill')
  })
})
