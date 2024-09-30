/// <reference types="cypress"/>

const url = 'https://app.simplesdental.com/simples/login';

beforeEach(() => {
    cy.clearCookies(); // Limpa cookies
  cy.clearLocalStorage(); // Limpa armazenamento local
  // Adiciona o cy.visit() antes de cada teste
  cy.visit(url);
});

describe('Teste funcional de login', () => {
    it('Deve realizar o login com sucesso', () => {

    const username = Cypress.env('username');
    const password = Cypress.env('password');

     // Verifica se as variáveis de ambiente estão definidas
     expect(username).to.not.be.undefined;
     expect(password).to.not.be.undefined;
       
      cy.get('#mat-input-0').type(username)
      cy.get('[data-testid="inputPassword"]').type(password, { log: false });
      cy.get('.layout-margin-top > .mat-focus-indicator').click()
      cy.get('.sd-page-title > :nth-child(3)').should('contain', 'Selecionar clínica')

      cy.url().should('not.eq', url); // Verifica se a URL mudou
      cy.get('.sd-companies-page__title').should('be.visible'); // Verifica se um elemento está visível

      cy.get('[style="left: 0px; width: calc(50% - 0.5px); margin-top: calc(25% + 0.5px); padding-top: calc(25% - 0.5px);"] > .mat-grid-tile-content > .mat-card > .mat-card-actions > .mat-focus-indicator').click()
      cy.get('[aria-describedby="cdk-describedby-message-pfg-1-12"] > .mat-list-item-content').should('be.visible').click();
      
    });
});
 