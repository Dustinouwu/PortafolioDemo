import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects';

describe('Projects', () => {
  test('el listado de proyectos tiene al menos 3 elementos', () => {
    render(<Projects />);
    // Busca los títulos de los proyectos en el timeline
    const proyectos = [
      'Plux - Filial de Corporación La Favorita',
      'Aneta - Automóvil Club del Ecuador',
      'Centro Ecuatoriano de Eficiencia de Recursos',
      'TAO TECHIDEAS'
    ];
    let encontrados = 0;
    proyectos.forEach(titulo => {
      if (screen.queryByText(new RegExp(titulo, 'i'))) encontrados++;
    });
    expect(encontrados).toBeGreaterThanOrEqual(3);
  });
});
