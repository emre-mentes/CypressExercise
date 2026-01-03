/// <reference types="cypress" />

describe('HoverOver', () => {

    it('Test Case', () => {
        cy.visit('https://www.amazon.com/')

        cy.get('#icp-nav-flyout').trigger('mouseover')
        //seçilen elementin üzerine fareyle gelinmiş gibi 
        //davranarak hover olayını manuel olarak tetikler.

        cy.wait(3000)

        cy.contains('Change country/region.').click()

        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})
        //{ force: true }, Cypress’e normalde tıklanamaz veya görünmez olsa bile
        //  bu işlemi zorla yap demektir.


        
    })
})