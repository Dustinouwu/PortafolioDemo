import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalInfo from '../components/PersonalInfo';

describe('PersonalInfo', () => {
  test('muestra la fotografía correctamente', () => {
    render(<PersonalInfo />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
    expect(img.getAttribute('alt')).toMatch(/foto/i);
  });

  test('muestra el número de teléfono', () => {
    render(<PersonalInfo />);
    expect(screen.getByTestId('telefono')).toHaveTextContent(/\d{9,}/);
  });

  test('muestra nombres y apellidos juntos', () => {
    render(<PersonalInfo />);
    expect(screen.getByText(/dastin.*chávez/i)).toBeInTheDocument();
  });
});
