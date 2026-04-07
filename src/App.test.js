import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog brand', () => {
  render(<App />);
  expect(screen.getByText(/SimpleBlog/i)).toBeInTheDocument();
});
