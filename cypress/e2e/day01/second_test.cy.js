/// <reference types="cypress" />

context('My Second Test', () => {
    // describe yerine context kulanabiliriz
    beforeEach('Her Testten Once Calisacak', ()=>{
        cy.visit('/')
    })

    it('URL Test', () => {

        cy.url().should('include', 'google')
        cy.url().should('eq', 'https://www.google.com/')
    })

    it('Title Test', () => {

        cy.title().should('include', 'Google')
        cy.title().should('equal', 'Google')
    })

    
    it('Search Test', () => {
        cy.get('[name="q"]',{timeout:5000}).type('fenerbahce{enter}') 
        
        // get(): locate alıyoruz
        // type(): metin gönderiyoruz
        // {enter} ENTER tuşuna bas
    })


    //skip testi yapmadan geçer
    it.skip('Search Test', () => {
        cy.get('.gLFyf', {timeout: 3000}).type('Cypress.io{enter}')
    })

   //it.only: sadece bu testi çalıştır.
   it.only('Click', () => {
       cy.get('.gb_B',{timeout:5000}).click();
   })
})