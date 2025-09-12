# banco-web-tests

Projeto de Testes Automatizados com Cypress e JavaScript

## Objetivo
Este projeto foi desenvolvido para demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress. O foco é apresentar boas práticas de organização, uso de Custom Commands e geração de relatórios.

## Componentes do Projeto
- **Cypress**: Framework de testes end-to-end para aplicações web.
- **Custom Commands**: Comandos personalizados para reutilização de código e melhor organização dos testes, localizados em `cypress/support/commands/`.
- **cypress-mochawesome-reporter**: Gera relatórios detalhados em HTML após a execução dos testes.
- **Testes Automatizados**: Exemplos de testes para login e transferência, localizados em `cypress/e2e/`.
- **Fixtures**: Dados de apoio para os testes, em `cypress/fixtures/`.

## Pré-requisitos
- Node.js instalado
- API e aplicação Web em execução:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/Varella1/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e a aplicação Web estão rodando.
2. Execute os testes:
   ```bash
   npx cypress run
   ```
3. Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes
- `cypress/e2e/login.cy.js`: Testes de login na aplicação.
- `cypress/e2e/transferencia.cy.js`: Testes de transferência bancária.
- Os testes utilizam dados de `cypress/fixtures/credenciais.json`.

## Custom Commands
Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos genéricos reutilizáveis.
- `cypress/support/commands/login.js`: Comandos para automação de login.
- `cypress/support/commands/transferencia.js`: Comandos para automação de transferência.

Para utilizar um Custom Command, basta chamá-lo nos testes, por exemplo:
```javascript
cy.login('usuario', 'senha');
```

## Relatórios
Após a execução dos testes, acesse o relatório em:
```
cypress/reports/html/index.html
```

## Contribuição
Sinta-se à vontade para abrir issues ou pull requests com sugestões e melhorias.

---
Mentoria 2.0 - Automação de Testes com Cypress
