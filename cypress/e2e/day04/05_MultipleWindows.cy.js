/// <reference types="cypress" />

describe('Multiple Windows', () => {

    it.skip('Removing Attribute', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr', 'target').click()

        cy.get('h3').should('have.text', 'New Window')
    })
    
    
    it('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) => {
            const newURL = element.prop('href')
            //prop() -> 'href' değerini ('/windows/new') aldik
            // prop(), jQuery'de attribute değerini alan bir fonksiyon



            
        cy.visit(newURL)
        })
    })
})