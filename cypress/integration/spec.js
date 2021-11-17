/// <reference types="cypress" />
describe('page', () => {
  it('should display staging environment app', () => {
    cy.visit('https://empty.appsemble.staging.appsemble.review');
    cy.contains('Example Page A').should('exist');
  });
})
