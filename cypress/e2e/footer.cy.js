/// <reference types="cypress" />

import { HOME } from "../../src/constants/routes";
import {
  NASA_APOD,
  NASA_API,
  GITHUB,
  STACKOVERFLOW,
  LINKEDIN,
} from "../../src/constants/links";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit(HOME);
  });

  it("has links with correct routes", () => {
    cy.get('[data-testid="nasa-apod-link"]').should(
      "have.attr",
      "href",
      NASA_APOD
    );
    cy.get('[data-testid="nasa-api-link"]').should(
      "have.attr",
      "href",
      NASA_API
    );
    cy.wait(6000);
    cy.get('[data-testid="github-link"]').should("have.attr", "href", GITHUB);
    cy.get('[data-testid="stackoverflow-link"]').should(
      "have.attr",
      "href",
      STACKOVERFLOW
    );
    cy.get('[data-testid="linkedin-link"]').should(
      "have.attr",
      "href",
      LINKEDIN
    );
  });

  it("has links with attributes to open in a new tab", () => {
    const links = [
      '[data-testid="nasa-apod-link"]',
      '[data-testid="nasa-api-link"]',
      '[data-testid="github-link"]',
      '[data-testid="stackoverflow-link"]',
      '[data-testid="linkedin-link"]',
    ];

    links.forEach((link) => {
      cy.get(link).then((a) => {
        expect(a.prop("target")).to.equal("_blank");
        expect(a.prop("rel")).to.equal("noopener noreferrer");
      });
    });
  });

  it("renders images", () => {
    cy.get('[data-testid="social-links-container"]')
      .find("img")
      .should("have.length", 3)
      .and("be.visible");
  });
});
