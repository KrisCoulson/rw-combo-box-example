import { render } from '@redwoodjs/testing/web'

import ComboBoxPage from './ComboBoxPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ComboBoxPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ComboBoxPage />)
    }).not.toThrow()
  })
})
