import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que a API está disponível 2", () => {
  cy.log("Verificando se a API está disponível");
});

When("realizo uma requisição GET para {string}", (endpoint) => {
  cy.request(`${Cypress.env('apiUrl')}${endpoint}`).as("getPostsResponse");
});

Then("o status da resposta deve ser {int}", (statusCode) => {
  cy.get("@getPostsResponse").its("status").should("eq", statusCode);
  cy.screenshot("GET_Status_" + statusCode); // print da evidência
});

Then ("o corpo da resposta deve ser um array", () => {
  cy.get("@getPostsResponse").its("body").should("be.an", "array");
});