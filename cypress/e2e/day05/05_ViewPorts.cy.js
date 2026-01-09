/// <reference types="cypress" />

describe('ViewPorts', () => {

    it('iphone-8', () => {
        cy.visit('https://www.techproeducation.com')
        cy.viewport('iphone-8')
        cy.screenshot()
    })

    it('MacBook-16', () => {
        cy.visit('https://www.techproeducation.com')
        cy.viewport('macbook-16')
        cy.screenshot()
    })

    it('Custom Screen', () => {
        cy.visit('https://www.techproeducation.com')
        cy.viewport(1500, 1000)
        cy.screenshot()
    })
})