var expect = require ('chai').expect
var compact = require ('../src/compact')

describe('compact()', function(){
  it('should return an array of only truthy values', function(){
    expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
    expect(compact(['bat', 'cap', '', null, 'tree', undefined])).to.deep.equal(['bat', 'cap', 'tree'])
  })

  it('should return an empty array if the function takes anything other than an array as an argument', function(){
    expect(compact('not an array')).to.deep.equal([])
  })
})
