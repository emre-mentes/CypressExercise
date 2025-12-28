/// <reference types="cypress" />

describe('Speedyli Rental Car', () => {

    it('Log in Testi', () => {

    cy.visit('https://www.speedyli.com/')
    //Seleniumdaki get()

    //1. YOL
    //cy.get('[href="/auth"]').click()

    //2. YOL
    cy.contains('Login/Register').click()
    // contains('Login/Register'): DOM'da Login/Register textini bul. Metni text olarak arar.
    cy.url().should('include', 'auth')


    cy.get(':nth-child(1) > [name="email"]').type("johnson@cars.com")
    cy.get(':nth-child(2) > .mb-3 > [name="password"]').type("Deneme1?")

    cy.contains('button', 'Login').click()




    })

})