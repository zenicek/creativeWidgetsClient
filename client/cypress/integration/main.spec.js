describe('E2E test', () => {
  it('has add new widget component', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
    cy.get('.widget-builder-ctn').should('be.visible');
  });
});
