/// <reference types="cypress" />

describe('scroll to top test', () => {
    beforeEach(() => {
        cy.visit('../../scroll-to-top.html')
    })

    it('Should show btn', () => {
        cy.get('[data-cy=btnScrollDown]').click();
        cy.get('[data-cy=btnScrollTop]').should("be.visible");
    });

    
    it('Should scroll top and hide btn', () => {
        cy.get('[data-cy=btnScrollDown]').click();
        cy.get('[data-cy=btnScrollTop]').click();
        cy.window().its('scrollY').should('equal', 0);
        cy.get('[data-cy=btnScrollTop]').should("not.be.visible");
    });

})