describe('E2E test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('New widget').click();
  });

  it('clicking widget tile takes user to widget builder', () => {
    cy.get('.widget-builder-ctn').should('be.visible');
  });

  it('lets to drag components to the widget builder field', () => {
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('.input-ctn').should('be.visible');
  });

  it('display inputed elements in setup mode', () => {
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('#toggle-mode').click();
    cy.get('.element-setup-ctn').should('be.visible');
  });

  it('should display result properly', () => {
    cy.contains('Value field').parent().drag('.widget-dnd-ctn');
    cy.get('#toggle-mode').click();
    cy.get('#formula-input').type('A');
    cy.get('#toggle-mode').click();
    cy.get('#widget-input').type(1);
    cy.get('#result-display').should('have.contain', '1 USD');
  });
});
