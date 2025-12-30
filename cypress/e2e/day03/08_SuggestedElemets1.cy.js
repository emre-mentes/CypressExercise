/// <reference types="cypress" />

describe('Suggested Elements', () => {

    it('TestCase 1', () => {

        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Yahoo')

        //1) Yol
        //cy.get('#ERWdKc > .wM6W7d > span').contains('mail').click()

        //2) Yol
        cy.get('li span b').contains('mail').click()


    })
})