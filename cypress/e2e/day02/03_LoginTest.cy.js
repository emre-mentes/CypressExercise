/// <reference types="cypress" />

describe('Login Menu Test', () => {

    it('Test Case 1', () => {

        cy.visit('https://www.kitapyurdu.com/')
        cy.get('#cookiescript_accept').click()
        cy.contains("Giriş Yap").click()


    })

    it('Test Case 2', () => {

        cy.visit('https://www.kitapyurdu.com/')
        cy.get('#cookiescript_accept').click()
        cy.contains("Giriş Yap").click()
        cy.contains('.text-form-title','Hoşgeldiniz')
        cy.contains('.form-label','E-Posta')

        //birinci yol
        cy.get('.form-label').should('contain','E-Posta:')


        //ikinci yol
        cy.get('.form-label').then(emailtext => {
            expect(emailtext.text()).to.equal('E-Posta:')
        })

        //ücüncü yol
        cy.get('.form-label').invoke('text').then(emailtext2 => {
            expect(emailtext2).to.equal('E-Posta:')
        })


    })

})