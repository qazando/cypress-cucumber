Feature: Atualização de um post existente

  Como um usuário da API
  Quero atualizar as informações de um post já criado
  Para corrigir ou modificar os dados existentes

  Scenario: Atualizar o título de um post existente
    Given que a API está disponível 4
    When envio uma requisição PUT para "/posts/1" com novo título
    Then o status da resposta deve ser 200
    And o corpo da resposta deve refletir as alterações realizadas