import React, { Component } from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

export default class Sample extends Component {
  constructor ( props ) {
    super( props )
  }

  componentWillUnmount () {
    const { onWillMountHandle } = this.props
    onWillMountHandle()
  }
  render () {
    const { onClickHandle } = this.props
    return (
      <div>
        <span onClick={ onClickHandle }>aaaa</span>
      </div>
    )
  }
}


// Enzyme.configure( { adapter: new Adapter() } )


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

// describe( 'toHaveBeenCalledTimes example', () => {
//   let testMock1
//   let subject

//   beforeEach( () => {
//     testMock1 = jest.fn()
//     subject = shallow( <Sample onWillMountHandle={ testMock1 } onClickHandle={ testMock1 } /> )
//   } )

//   test( 'handle onWillMountHandle', () => {
//     expect( testMock1 ).toHaveBeenCalled(1)
//   } )

//   test( 'handle onClickHandle', () => {
//     subject.find( 'span' ).simulate( 'click' )
//     expect( testMock1 ).toHaveBeenCalledTimes(2)
//   } )
// } )
