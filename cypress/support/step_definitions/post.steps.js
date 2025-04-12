import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que a API está disponível 3", () => {
  cy.log("API disponível");
});

When("envio uma requisição POST para \"/posts\" com título, corpo e userId", () => {
  cy.request({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    body: {
      title: "Novo Post",
      body: "Conteúdo do post",
      userId: 1
    }
  }).as("postResponse");
});

Then("o status da resposta deve ser 201", () => {
  cy.get("@postResponse").its("status").should("eq", 201);
});
