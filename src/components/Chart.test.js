import {render,  screen } from '@testing-library/react';

import Chart from './Chart'


const setupRoutes = () => {
  const utils = render(<Chart />)
  return {
    ...utils
  }
}


describe("Render", () => {
 
   test("should validate correct render svg", () => {
      const {  getAllByTitle } = setupRoutes()

     setTimeout(() => 
      expect(screen.getAllByTitle(/\d/))
     ,2000  ) 
  })


})