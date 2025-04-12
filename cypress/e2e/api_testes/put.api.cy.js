describe('PUT - /posts/:id', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    it('Deve atualizar um post existente', () => {
      cy.request('PUT', `${baseUrl}/posts/1`, {
        id: 1,
        title: 'Post Atualizado',
        body: 'Conteúdo atualizado',
        userId: 1
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.title).to.eq('Post Atualizado')
      })
    })
  })