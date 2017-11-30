describe("todos app", () => {
  it("should load home page", () => {
    cy.visit("/");

    // click sign in
    cy.get(".auth").click();

    // should redirect to auth0
    cy.title().should("include", "Auth0");
  });

  it("load todos after signing in", () => {
    cy.visit("/#/todos");

    // should have multiple todos
    cy.get(".todo");

    // change completed
    cy.get(".completed").click();
  });
});
