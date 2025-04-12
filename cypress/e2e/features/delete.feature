Feature: Exclusão de um post

Como um usuário da API
Quero excluir um post existente
Para que ele não esteja mais disponível na listagem

Scenario: Excluir um post com sucesso
  Given que a API está disponível 1
  When envio uma requisição DELETE para "/posts/1"
  Then o status da resposta deve ser 200