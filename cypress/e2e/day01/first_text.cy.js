/// <reference types="cypress" />

describe("my First Test", () => {
  //describe: tanimlamak demek. Burda Testi tanimliyorum............................................................................................................................/
  //describe ve it mochadan geliyor

  it("URL TEST", () => {
    cy.visit("https://www.speedyli.com/");
    //visit(URL): URL´ e git

    cy.url().should("include", "speed");

    //should assert islemi icin kullanilir
    //include; icermek demek
  });
  

  it("TITLE TEST", () => {
    cy.visit("https://www.speedyli.com/");
    cy.title().should("include", "Rental");
    cy.title().should("eq", "Speedly Rental Car | Premium Car Rental");
    // eq esitmi demek, bu yüzden tamanini yazmak zorundayiz

  });
});
