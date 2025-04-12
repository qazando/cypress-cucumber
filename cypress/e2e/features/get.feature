Feature: Consulta de posts existentes

  Como um usuário da API
  Quero consultar os posts disponíveis
  Para visualizar as informações publicadas

  Scenario: Buscar todos os posts com sucesso
    Given que a API está disponível 2
    When realizo uma requisição GET para '/posts'
    Then o status da resposta deve ser 200
