/// <reference types="cypress" />

describe('todo test', () => {
    beforeEach(() => {
        cy.visit('../../index.html')
    })

    it('Should add 4 todo delet second and show 3 ', () => {
        cy.get('[data-cy=textTodo]').clear().type('todo 1');
        cy.get('[data-cy=addTodo]').click();
        cy.get('[data-cy=textTodo]').clear().type('todo 2');
        cy.get('[data-cy=addTodo]').click();
        cy.get('[data-cy=textTodo]').clear().type('todo 3');
        cy.get('[data-cy=addTodo]').click();
        cy.get('[data-cy=textTodo]').clear().type('todo 4');
        cy.get('[data-cy=addTodo]').click();
        cy.get('[data-cy=deleteTodo]').eq(1).click();
        cy.get('[data-cy=deleteTodo]').should("have.length",3);
    });

})