/// <reference types="cypress" />

import { ARCHIVE } from "../../src/constants/routes";

describe("Archive", () => {
  beforeEach(() => {
    cy.visit(ARCHIVE);
  });

  it("should url be correct", () => {
    cy.url().should("eq", Cypress.config().baseUrl + ARCHIVE);
  });
});
