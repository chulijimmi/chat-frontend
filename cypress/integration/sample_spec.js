/**
 * Sample test from cypress
 */
describe("My first test", function () {
  it("Gets, type, and asserts", function () {
    // Arrange - setup initial app state
    // - visit a website
    // - query for a element
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    // Act - take an action
    // - interact with that element
    cy.url().should("include", "/commands/actions");
    // Assert - make an assertion
    // - make an assertion about page content
    cy.get("#email1")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
