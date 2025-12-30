/// <reference types="cypress" />

describe('Before After', () => {
    before( () => {
        cy.log('Her test dosyasından önce bir kere calisacak')
    })

    after( () => {
        cy.log('Her test dosyasından sonra bir kere calisacak')
    })

    beforeEach(() => {
        cy.log('Her testen önce bir kere calisacak')
    })

    afterEach(() => {
        cy.log('Her testen sonra bir kere calisacak')
    })

    it('Test Case 1', () => {
        cy.log('Test Case 1')
    })

    it('Test Case 2', () => {
        cy.log('Test Case 2')
    })

})