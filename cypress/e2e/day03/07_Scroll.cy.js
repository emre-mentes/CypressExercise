/// <reference types="cypress" />

describe('Scroll', () => {

    it('Scrolintoview', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000)

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //Locate ettiğimiz yerin altına sayfayı kaydırır

        cy.wait(3000)

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        .scrollIntoView({duration: 3000})
        //{duration: 8000} 8 saniye içerisinde locate edilen yere gel


        //scrollTo(x,y)
        cy.scrollTo(0,0)

        cy.wait(2000)

        cy.scrollTo(0, 500)

        cy.wait(2000)

        cy.scrollTo('500px')

        cy.wait(2000)

        cy.scrollTo(0, -500)

    })
})