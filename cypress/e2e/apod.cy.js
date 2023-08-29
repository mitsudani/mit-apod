/// <reference types="cypress" />

import { APOD } from "../../src/constants/routes";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit(APOD);
  });

  it("has links with correct routes", () => {
    cy.intercept("GET", "/planetary/*", { fixture: "apod.json" });
  });
});
