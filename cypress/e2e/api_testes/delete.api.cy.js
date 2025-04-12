describe('DELETE - /posts/:id', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  
    it('Deve deletar um post existente', () => {
      cy.request('DELETE', `${baseUrl}/posts/1`).then((res) => {
        expect(res.status).to.eq(200)
      })
    })
  })