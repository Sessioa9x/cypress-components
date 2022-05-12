/// <reference types="cypress" />

describe('smart tag test', () => {
    beforeEach(() => {
        cy.visit('../../smart-tag.html')
    })

    it('Should show tag', () => {
        cy.get('[data-cy=btnSeeMore]').trigger('mouseover');
        cy.get('[data-cy=tag]').should("be.visible");
    });

    
    it('Should hide tag', () => {
        cy.get('[data-cy=btnSeeMore]').trigger('mouseover');
        cy.get('[data-cy=btnSeeMore]').trigger('mouseout');
        cy.get('[data-cy=tag]').should("not.be.visible");
    });

})