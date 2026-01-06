/// <reference types="cypress" />

describe('Selectors Examples', () => {

    it.skip('Css Seloctors', () => {

    cy.visit('https://www.amazon.com/')


    //1) By Tag Name
    cy.get('input')

    //2) By id
    cy.get('#twotabsearchtextbox')

    //3) By Class
    cy.get('.nav-search-field')

    //4) By Attribute name and Value
    cy.get("input[type='text']")

    //5) By 2 Attribute
    cy.get("[type='text'][id='twotabsearchtextbox']")

    })

    it('XPath', () => {

    cy.visit('https://www.google.com')

    //5) By Xpath
    //cy.xpath("//a[@class='gb_Z']").should('include.text', 'Gmail')
    // xpath() algılanmaz ise 1. satıra üsteki kodu yazabilirsiniz

    // require('cypress-xpath')
    // yukarıdaki kodu e2e.cy.js dosayasına ekleyeceğiz
    
    
    })
})