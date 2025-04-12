/// <reference types="cypress"/>

describe('GET - /posts', () => {  
    it('Deve retornar todos os posts', () => {
      cy.request(`${Cypress.env('apiUrl')}${endpoint}`).as("getPostsResponse").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an('array')
      });
    });
  
    it('Deve retornar um post por ID', () => {
      cy.request(`${Cypress.env('apiUrl')}${endpoint}`).as("getPostsResponse").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.id).to.eq(1)
      });
    });
  
    it('Deve retornar 404 para post inexistente', () => {
      cy.request({
        url: `${Cypress.env('apiUrl')}/posts/9999`,
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(404)
      });
    });
  });