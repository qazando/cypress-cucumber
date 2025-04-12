describe('POST - /posts', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
  
    it('Deve criar um novo post', () => {
      cy.request('POST', `${baseUrl}/posts`, {
        title: 'Novo Post',
        body: 'Conteúdo do post',
        userId: 1
      }).then((res) => {
        expect(res.status).to.eq(201) // 201 = Created
        expect(res.body).to.have.property('title', 'Novo Post')
      })
    })
  })