Funcionalidade: Login no Swag Labs
  Como um usuário do Swag Labs
  Quero realizar login com credenciais válidas
  Para acessar a lista de produtos

  Cenário: Realizar login com sucesso
    Dado que acesso a página de login do Swag Labs
    Quando informo usuário "standard_user" e senha "secret_sauce"
    E clico no botão de login
    Então devo visualizar a página de produtos
