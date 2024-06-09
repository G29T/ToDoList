import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import Counter from './counter.component';

test('it renders the to do and completed tasks', () => {
    render(<Counter />);
    const completedTasks = screen.getByTestId('completed');
    const toDoTasks = screen.getByTestId('todo');
    expect(completedTasks).toBeInTheDocument();
    expect(toDoTasks).toBeInTheDocument();
  });