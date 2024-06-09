import React from 'react';
import { render, screen  } from '@testing-library/react';
import InputContainer from './input-container.component';

test('it renders the add and clear buttons', () => {
    render(<InputContainer />);
    const addButton = screen.getByTestId('Add');
    const clearButton = screen.getByTestId('Clear List');
    expect(addButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
});

test('it renders the input field', () => {
    render(<InputContainer />);
    const addTaskInputField = screen.getByTestId('add-task-input');
    expect(addTaskInputField).toBeInTheDocument();
});