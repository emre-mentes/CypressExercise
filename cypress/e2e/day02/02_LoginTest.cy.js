/// <reference types="cypress" />

const { title } = require("process")

describe('Kitap Yurdu', () => {

    it('Login Test', () => {
        cy.visit('https://www.kitapyurdu.com/')

        cy.get('#cookiescript_accept').click()

        //1) contains('Text')
       // cy.contains("Giriş Yap").click()


        //2) contains('locator', 'Text')
       // cy.contains("[class ='menu-top-button login']", 'Giriş Yap').click()
        

        //3) contains('text')
          // cy.contains('giriş Yap',{matchCase: false}).click()
        // Büyük küçük harf dikkate almadan, metin olarak log in içeren web elementini ara


        //ASSERT

        //1)have.text
        cy.get('.login > a').should('have.text', 'Giriş Yap')
        //locate edilen yerdeki metinde 'Giriş Yap' yazıyor mu? Var mı?

        
        //2) cy.url().should()
        cy.url().should('include', 'kitapyurdu')

        //3)be.visible
        // cy.contains("Giriş Yap").click()
         //cy.get('.text-form-title').should('be.visible')


        //4) cy.title()
        
        cy.title().should('eq', 'Kitapyurdu, Kitapla buluşmanın en kolay yolu')

        //5) include.text
         cy.get('.login > a').should('include.text', 'Giriş Yap')
        //locate edilen yerdeki metin 'Giriş Yap' içeriyor mu?

        //Toplam Link Sayısı
       //cy.get('li a').should('have.length', 278)

        //find(): Belirli bir html seçiminin alt elemanları bulmak için
        cy.get('.hasLink > .common-sprite').click()
        cy.wait(2000)
            cy.get('a.d-flex.flex-column') // tüm kategori linklerini seçiyoruz
            .find('.category-name')       // altındaki metin divini buluyoruz
            .contains('Ders Kitapları')  // text içeriğini kontrol ediyoruz
            .should('be.visible')
                
            //cy.find() şeklinde kullanılmaz
  
        //within()
       cy.get('div.category-container').first().within(() => {
       cy.get("[alt='Ders Kitapları']").click()
        })

        /*
        NOT: Web Elementleri ilk olarak get ile bulacağız. Eğer get() ile bulamazsak
        find() ile deneyeceğiz. Onunlada bulamazsak within() ile deneyeceğiz.

        */


    })

})