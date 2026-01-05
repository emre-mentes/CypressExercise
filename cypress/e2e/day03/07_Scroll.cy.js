/// <reference types="cypress" />

describe('Scroll', () => {

    it('Scrolintoview', () => {

        cy.visit('https://www.kitapyurdu.com/')

        cy.get('#cookiescript_accept').click()

        cy.wait(3000)

        cy.contains("Kırtasiye, Kültür-Sanat").scrollIntoView()
        //Locate ettiğimiz yerin altına sayfayı kaydırır

        cy.wait(5000)


        cy.get('.login > a').scrollIntoView({duration: 3000})
   //   //{duration: 8000} 8 saniye içerisinde locate edilen yere gel


   // Sayfayı en üste kaydırıyoruz
        cy.scrollTo(0, 0)
        // (x:0, y:0) koordinatına giderek sayfanın tepesine çıkıyor

        cy.wait(2000)

        // Sayfayı yatay 0, dikey 500px kadar kaydırıyoruz
        cy.scrollTo(0, 500)

        cy.wait(2000)

        // Alternatif olarak scrollTo değerini string ile de verebiliriz
        cy.scrollTo('500px')

        cy.wait(2000)

        
        // Sayfayı dikey -500px kaydırarak biraz yukarı çıkıyoruz
        cy.scrollTo(0, -500)

    })
})