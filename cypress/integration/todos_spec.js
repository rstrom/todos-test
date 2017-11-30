describe("todos app", () => {
  it("should load home page", () => {
    cy.visit("/");

    // click sign in
    cy.get(".auth").click();

    // should redirect to auth0
    cy.title().should("include", "auth0");
  });

  it("should load todos after signing in", () => {
    cy.visit("/#/todos");

    // should have multiple todos
    cy.get(".todo");
  });

  it("should load an individual todo", () => {
    cy.visit("/#/todos/79e07991-de8d-45b9-a031-a4ded6670504");

    // should have a todo
    cy.get(".todo");
  });
});
