import Counter from './Couter'

describe( 'Counter', () => {
  let counter
  beforeAll( () => {
    counter = new Counter( 0 )
  })
  beforeEach( () => {
    counter.count = 1
  } )
  describe( 'increment()', () => {
    test( 'increment', () => {
      counter.increment()
      expect( counter.count ).toBe( 2 )
    } )
  } )
  describe( 'decrement()', () => {
    test( 'decrement', () => {
      counter.decrement()
      expect( counter.count ).toBe( 0 )
    } )
  } )
} )