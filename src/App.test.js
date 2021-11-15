import { render, screen } from '@testing-library/react';
import App from './App';




test('renders Ramp chart', () => {
  render(<App />);
  const linkElement = screen.getByText(/ramp chart/i);
  expect(linkElement).toBeInTheDocument();
});
