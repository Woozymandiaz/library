import { render, screen } from '@testing-library/react';
import Library from './Library';

test('renders learn react link', () => {
  render(<Library />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
