import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que a API está disponível 1", () => {
  cy.log("API disponível");
});

When("envio uma requisição DELETE para \"/posts/1\"", () => {
  cy.request({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/1"
  }).as("deleteResponse");
});

Then("o status da resposta deve ser 200 1", () => {
  cy.get("@deleteResponse").its("status").should("eq", 200);
});