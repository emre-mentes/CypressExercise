/// <reference types="cypress" />

describe('Selectors Examples', () => {

    it('Css Seloctors', () => {

    cy.visit('https://www.amazon.com/')


    //1) By Tag Name
    cy.get('input').type("fsaf")

    //2) By id
    //cy.get('#twotabsearchtextbox')

    //3) By Class
    //cy.get('.nav-search-field')

    //4) By Attribute name and Value
   // cy.get("input[type='text']")

    //5) By 2 Attribute
   // cy.get("[type='text'][id='twotabsearchtextbox']")

    })

    it.skip('XPath', () => {

    cy.visit('https://www.google.com')

    //5) By Xpath
    cy.xpath("//a[@class='gb_d']").should('include.text', 'Gmail')
    // /// <reference types="cypress-xpath" />
    // xpath() algılanmaz ise 1. satıra üsteki kodu yazabilirsiniz

    // require('cypress-xpath')
    // yukarıdaki kodu e2e.cy.js dosayasına ekleyeceğiz
    
    })
})