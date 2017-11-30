describe("todos app", () => {
  it("should load home page", () => {
    cy.visit("/");

    // click sign in
    cy.get(".auth").click();

    // should redirect to auth0
    cy.title().should("include", "auth0");
  });

  it("should load todos after signing in", () => {});

  it("should load an individual todo", () => {});
});
