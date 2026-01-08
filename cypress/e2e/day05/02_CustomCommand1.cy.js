/// <reference types="cypress" />

describe('Custom Command1', () => {

    it('Positive Login', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('123murat123@gmail.com')
        cy.get('#passwd').type('123murat123')
        cy.get('#SubmitLogin > span').click()
        cy.get('.account > span').should('have.text', 'Murat Murat')
    })

    it('Positive Login with Custom', () => {
        cy.ap_login('123murat123@gmail.com','123murat123')
        //ap_login -> comands.js dosyadsında oluşturduğumuz fonksiyon
        cy.get('.account > span').should('have.text', 'Murat Murat')
    })

    it.only('Negative Login', () => {
        cy.ap_login('123murat123@gmail.com','123murat12')
        //cy.get('.account > span').should('have.text', 'Murat Murat')

        cy.get('ol > li').should('have.text','Authentication failed.')

        cy.get('#center_column > :nth-child(2)').should('be.visible')

        cy.url().should('include', 'controller=authentication')

        cy.screenshot()

    })
})