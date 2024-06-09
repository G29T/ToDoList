import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import { ListProvider } from './contexts/list.context';

test('it renders the delete button', () => {
    render(<ListProvider><App/></ListProvider>);
    expect(screen.queryByTestId('Delete')).toBeNull();

    const inputField = screen.getByTestId('add-task-input');
    fireEvent.change(inputField, { target: { value: 'Task 1' } });
    fireEvent.click(screen.getByTestId('Add'));

    expect(screen.getByTestId('Delete')).toBeInTheDocument();
});

test('Delete button is not rendered when Clear List button is clicked', () => {
    render(<ListProvider><App /></ListProvider>);

    const clearListButton = screen.getByTestId('Clear List');
    fireEvent.click(clearListButton);

    expect(screen.queryByTestId('Delete')).toBeNull();
});

test('it tests the counter for to do tasks', () => {
    render(<ListProvider><App /></ListProvider>);

    const inputField = screen.getByTestId('add-task-input');
    fireEvent.change(inputField, { target: { value: 'Task 2' } });
    fireEvent.click(screen.getByTestId('Add'));

    fireEvent.change(inputField, { target: { value: 'Task 3' } });
    fireEvent.click(screen.getByTestId('Add'));

    const completedTasks = screen.getByTestId('completed');
    const toDoTasks = screen.getByTestId('todo');

    expect(completedTasks.textContent).toBe('Tasks completed: 0');
    expect(toDoTasks.textContent).toBe('Tasks to do: 3');
});

test('it tests the counter for completed tasks', () => {
    render(<ListProvider><App /></ListProvider>);

    const inputField = screen.getByTestId('add-task-input');
    fireEvent.change(inputField, { target: { value: 'Task 4' } });
    fireEvent.click(screen.getByTestId('Add'));

    fireEvent.click(screen.getByTestId('taskCheckbox-0'));
    fireEvent.click(screen.getByTestId('taskCheckbox-2'));

    expect(screen.getByTestId('taskCheckbox-0').checked).toEqual(true);
    expect(screen.getByTestId('taskCheckbox-2').checked).toEqual(true);

    const completedTasks = screen.getByTestId('completed');
    const toDoTasks = screen.getByTestId('todo');

    expect(completedTasks.textContent).toBe('Tasks completed: 2');
    expect(toDoTasks.textContent).toBe('Tasks to do: 2');
});

test('it tests the counter when a task is deleted', () => {
    render(<ListProvider><App /></ListProvider>);

    const siblingElement = screen.getByTestId('taskCheckbox-0');
    const deleteButtonSibling = siblingElement.nextElementSibling.nextElementSibling.nextElementSibling;

    const deleteButtonSiblingHasTestId = deleteButtonSibling && deleteButtonSibling.getAttribute('data-testid') === 'Delete';
    expect(deleteButtonSiblingHasTestId).toBe(true);

    fireEvent.click(deleteButtonSibling);

    const completedTasks = screen.getByTestId('completed');
    const toDoTasks = screen.getByTestId('todo');

    expect(completedTasks.textContent).toBe('Tasks completed: 1');
    expect(toDoTasks.textContent).toBe('Tasks to do: 2');
});

test('it tests the results of clicking the Clear List button', () => {
    render(<ListProvider><App /></ListProvider>);

    const clearListButton = screen.getByTestId('Clear List');
    fireEvent.click(clearListButton);

    expect(screen.queryByTestId('Delete')).toBeNull();

    const completedTasks = screen.getByTestId('completed');
    const toDoTasks = screen.getByTestId('todo');

    expect(completedTasks.textContent).toBe('Tasks completed: 0');
    expect(toDoTasks.textContent).toBe('Tasks to do: 0');
});