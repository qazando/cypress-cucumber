Feature: Criação de um novo post

  Como um usuário da API
  Quero enviar dados para criar um novo post
  Para que ele seja armazenado e possa ser consultado futuramente

  Scenario: Criar um novo post com dados válidos
    Given que a API está disponível 3
    When envio uma requisição POST para "/posts" com título, corpo e userId
    Then o status da resposta deve ser 201
    And a resposta deve conter os dados do post criado