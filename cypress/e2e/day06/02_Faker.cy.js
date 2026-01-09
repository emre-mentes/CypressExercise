/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

/*
FAKER KURULUM
1) npmjs.com/package/@faker-js/faker

2) npm install --save-dev @faker-js/faker
*/

describe('Using Faker', () => {

    it('Faker Login Test', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.login').click()

        //let, var, const javascript değişkenler.

        let email = faker.internet.email()
        cy.get('#email_create').type(email)

        cy.get('#SubmitCreate > span').click()

        cy.wait(9000)

        cy.get('#id_gender1').click()

        let firstName = faker.name.firstName('male')
        cy.get('#customer_firstname').type(firstName)

        let lastName = faker.name.lastName()
        cy.get('#customer_lastname').type(lastName)

        let password = faker.internet.password()
        cy.get('#passwd').type(password)

        let address = faker.address.streetAddress()
        cy.get('#address1').type(address)

        let city = faker.address.city()
        cy.get('#city').type(city)

        cy.get('#id_state').select('1')

        let postcode = faker.address.zipCode('#####')
        cy.get('#postcode').type(postcode)

        let tel = faker.phone.number('###-###-##-##')
        cy.get('#phone_mobile').type(tel)

        cy.get('#submitAccount > span').click()

        cy.get('.account > span').should('include.text', firstName)

        cy.get('.account > span').should('include.text', lastName)
    })

})