/**
 * TDD join room
 */

describe('Test join room', () => {
  it('Success join room process', () => {
    cy.visit('http://localhost:8000');
    cy.get('[data-test-id="userName"]').type('benackward');
    cy.get('[data-test-id="userName"]').should('have.value', 'benackward');
    cy.get('[data-test-id="roomName"]').type('react');
    cy.get('[data-test-id="roomName"]').should('have.value', 'react');
    cy.get('[data-test-id="buttonJoin"]').click();
    cy.url().should('include', '/chat');
  });
});
