import { render } from '@redwoodjs/testing/web'

import ComboBox from './ComboBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ComboBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ComboBox />)
    }).not.toThrow()
  })
})
