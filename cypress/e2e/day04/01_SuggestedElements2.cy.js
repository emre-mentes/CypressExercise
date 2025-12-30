/// <reference types="cypress" />

describe('Suggested Elements 2', () => {

    it('Test Case', () => {
        cy.visit('https://www.amazon.com/')

        cy.get('#nav-search').type('dress')

        cy.wait(9000)

        cy.get('#sac-suggestion-row-10-cell-1 > .s-suggestion').click()

       cy.get('.s-no-outline > .a-row > .a-size-base').should('be.visible')


    })
})