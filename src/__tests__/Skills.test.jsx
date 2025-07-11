import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../components/Skills';

// Mock react-fast-marquee para evitar errores de renderizado en test
jest.mock('react-fast-marquee', () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>
}));

describe('Skills', () => {
  test('el listado de habilidades blandas tiene al menos 5 elementos', () => {
    render(<Skills />);
    const habilidades = [
      'Comunicación',
      'Trabajo en equipo',
      'Trabajo bajo presión',
      'Rapido Aprendizaje',
      'Responsabilidad',
      'Dedicación',
      'Liderazgo'
    ];
    let encontrados = 0;
    habilidades.forEach(habilidad => {
      if (screen.queryAllByText(habilidad).length > 0) encontrados++;
    });
    expect(encontrados).toBeGreaterThanOrEqual(5);
  });
});
