/// <reference types="cypress" />

describe('Custom Command2', () => {

    it('Amazon Search', () => {
        cy.amazonSearch('iphone')
        cy.get('.a-color-state').should('include.text', 'iphone')
        cy.get('#twotabsearchtextbox').should('have.value','iphone')
        // html kodlarındaki arama butonundaki value="iphone" değerini assert ettik
        cy.screenshot()

    })
})