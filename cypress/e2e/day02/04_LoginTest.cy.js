/// <reference types="cypress" />

describe('Login Test', () => {

    it('Pozitif Test', () => {

        const username= "emreowen57@gmail.com"
        const password = "123456"

        cy.visit('https://www.kitapyurdu.com/')
        cy.get('#cookiescript_accept').click()
        cy.contains("Giriş Yap").click()

       cy.get('[name="email"]').type(username)
       cy.get('[name="password"]').type(password)
       
       cy.get('#login-button').click();

        cy.url().should('include', 'account')

        cy.get("[class='menu top login']").should('contain', 'Emre')

    })


    it.only('Negative Test', () => {

        const username= "emreowen57@gmail.com"
        const password = "123456"

        cy.visit('https://www.kitapyurdu.com/')
        cy.get('#cookiescript_accept').click()
        cy.contains("Giriş Yap").click()

        cy.wait(5000)

       cy.get('[name="email"]').type(username)
       cy.get('[name="password"]').type(password)
       
       cy.get('#login-button').click();
       cy.get("[class='swal2-html-container']").should('include.text','E-Posta Adresi ya da şifreniz yanlış. Şifrenizi girerken büyük küçük harf ayrımına dikkat ediniz.')


    })

})