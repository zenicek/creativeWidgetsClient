describe('E2E test', () => {
  it('clicking widget tile takes user to widget builder', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
    cy.get('.widget-builder-ctn').should('be.visible');
  });

  it('lets to drag components to the widget builder field', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('.input-ctn').should('be.visible');
  });

  it('display inputed elements in setup mode', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('#toggle-mode').click();
    cy.get('.element-setup-ctn').should('be.visible');
  });

  it('should display result properly', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('#toggle-mode').click();
    cy.get('#formula-input').type('A');
    cy.get('#toggle-mode').click();
    cy.get('.input-ctn').type(1);
    cy.get('#result-display').should('have.contain', '1 USD');
  });
});
