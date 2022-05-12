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

})