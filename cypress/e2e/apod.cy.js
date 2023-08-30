/// <reference types="cypress" />

import { APOD } from "../../src/constants/routes";

describe("APOD", () => {
  it("mocks a response from a fixture", () => {
    cy.intercept("GET", "/planetary/*", { fixture: "apod.json" });
    cy.visit(APOD);
    cy.pause();
  });

  it("shows error message when a network error occurs", () => {
    cy.intercept(
      { method: "GET", url: "/planetary/*" },
      { statusCode: 500 }
    ).as("serverError");

    cy.visit(APOD);

    cy.get('[data-testid="error-message"]').should("be.visible");
  });
});
