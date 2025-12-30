/// <reference types="cypress" />

describe('Navigation', () => {

    it.skip('Back, Forward, Refresh', () => {

        cy.visit('https://www.kitapyurdu.com/')

        cy.get('#cookiescript_accept').click()

       // cy.wait(3000)
       cy.get('.login > a').click()

       cy.wait(3000)

        cy.go('back')
        cy.wait(3000)

        cy.go(-1)
        // -1 önceki sayfaya git

        cy.wait(3000)
        cy.go('forward')
      / cy.go(1)

        cy.wait(3000)
        cy.reload()


    })

    it('Chaing Navigation', () => {

        cy.visit('https://www.kitapyurdu.com/')

        cy.get('#cookiescript_accept').click()

        cy.wait(3000)

       cy.get('.login > a').click()

        cy.wait(3000)

        cy.go('back').go('forward').go(-1).go(1)

        cy.reload(true)
        //cy.reload(true): Sayfayı hafızadan, değil yeniden yükler

    })
})