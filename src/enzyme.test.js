import React from 'react'
import Sample from './enzyme'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure( { adapter: new Adapter() } )

// describe( 'toHaveBeenCalled example', () => {
//   let testMock1
//   let testMock2
//   let subject

//   beforeEach( () => {
//     testMock1 = jest.fn()
//     testMock2 = jest.fn()
//     subject = shallow( <Sample onWillMountHandle={ testMock1 } onClickHandle={ testMock2 } /> )
//   } )

//   test( 'handle onWillMountHandle', () => {
//     expect( testMock1 ).toHaveBeenCalled()
//   } )

//   test( 'handle onClickHandle', () => {
//     subject.find( 'span' ).simulate( 'click' )
//     expect( testMock2 ).toBeCalled()
//   } )
// } )

describe( 'toHaveBeenCalledTimes example', () => {
  let testMock1
  let subject

  beforeEach( () => {
    testMock1 = jest.fn()
    subject = shallow( <Sample onWillMountHandle={ testMock1 } onClickHandle={ testMock1 } /> )
  } )

  test( 'handle onWillMountHandle', () => {
    expect( testMock1 ).toHaveBeenCalledTimes( 0 )
  } )

  test( 'handle onClickHandle', () => {
    subject.find( 'span' ).simulate( 'click' )
    expect( testMock1 ).toHaveBeenCalledTimes( 1 )
  } )
} )
