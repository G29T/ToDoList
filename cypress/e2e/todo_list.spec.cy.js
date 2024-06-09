describe('Todo list tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Adds new tasks', () => {
        cy.get('[data-testid="add-task-input"]').type('Task 1');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 2');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 3');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="inputListItem-0"]').should('have.value', 'Task 1').should('be.visible');
        cy.get('[data-testid="inputListItem-1"]').should('have.value', 'Task 2').should('be.visible');
        cy.get('[data-testid="inputListItem-2"]').should('have.value', 'Task 3').should('be.visible');
    });

    it('Clears list', () => {
        cy.get('[data-testid="add-task-input"]').type('Task 1');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 2');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 3');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="Clear List"]').click();

        cy.get('[data-testid="inputListItem-0"]').should('not.exist');
    });

    it('Removes a tasks', () => {

        cy.get('[data-testid="add-task-input"]').type('Task 1');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 2');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="inputListItem-0"]').should('have.value', 'Task 1').should('be.visible');
        cy.get('[data-testid="inputListItem-1"]').should('have.value', 'Task 2').should('be.visible');

        cy.get('[data-testid="inputListItem-0"]').nextAll().eq(1).then(($thirdSibling) => {
            cy.get($thirdSibling).should('contain', 'Delete');
            cy.get($thirdSibling).click();
        });

        cy.get('[data-testid="inputListItem-0"]').should('have.value', 'Task 2').should('be.visible');

    });

    it('Completes tasks and checks counter', () => {
        cy.get('[data-testid="add-task-input"]').type('Task 1');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 2');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 3');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="add-task-input"]').type('Task 4');
        cy.get('[data-testid="Add"]').click();

        cy.get('[data-testid="taskCheckbox-1"]').click();
        cy.get('[data-testid="taskCheckbox-3"]').click();

        cy.get('[data-testid="completed"]').should('have.text', 'Tasks completed: 2');
        cy.get('[data-testid="todo"]').should('have.text', 'Tasks to do: 2');

    });
})