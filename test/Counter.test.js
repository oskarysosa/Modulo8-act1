import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../src/components/counter';

test('El contador se incrementa al hacer clic en el botón', () => {
  render(<Counter />);

  // Verifica que el contador empiece en 0
  const initialCount = screen.getByText('Contador: 0');
  expect(initialCount).toBeInTheDocument();

  // Haz clic en el botón de incrementar
  const incrementButton = screen.getByText('Incrementar');
  fireEvent.click(incrementButton);

  // Verifica que el contador ahora muestre 1
  const updatedCount = screen.getByText('Contador: 1');
  expect(updatedCount).toBeInTheDocument(); 
});
