describe("todos app", () => {
  it("should load home page", () => {
    cy.visit("/");

    // click sign in
    cy.get(".auth").click();

    // after login should redirect to todos list
  });

  it("should load todos after signing in", () => {});

  it("should load an individual todo", () => {});
});
