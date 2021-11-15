import {render, fireEvent, screen, act, waitFor , within} from '@testing-library/react';

import Routes from './Routes'


const setupRoutes = () => {
  const utils = render(<Routes />)
  return {
    ...utils
  }
}


describe("Render", () => {
 
   test("should validate correct render of digits", () => {
      const { getAllByText, getAllByTestId } = setupRoutes()
      
      expect(getAllByTestId('digit')[0]).toHaveTextContent(/\d/)
  })
})