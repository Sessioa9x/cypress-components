/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
        cy.visit('../../modal.html')
    })

    it('Should open modal', () => {
        const newItem = 'A'
        cy.get('[data-cy=display]').click();
        cy.get('[data-cy=closeSvg]').should("be.visible");
    });

    
    it('Should close modal', () => {
        cy.get('[data-cy=display]').click();
        cy.get('[data-cy=closeSvg]').click();
        cy.get('[data-cy=closeSvg]').should("not.be.visible");
    });

    it('Should have lorem ipsum', () => {
        cy.get('[data-cy=display]').click();
        cy.get('[data-cy=modal]').find('h2').should('have.text', 'Lorem Ipsum');
    });

})