/// <reference types="cypress" />

import { ARCHIVE } from "../../src/constants/routes";

describe("Archive", () => {
  beforeEach(() => {
    cy.visit(ARCHIVE);
  });

  it("searches for a picture by date", () => {
    const year = "2010";
    const month = "04";
    const day = "10";

    cy.get(".react-date-picker__inputGroup__year").type(year);
    cy.get(".react-date-picker__inputGroup__month").type(month);
    cy.get(".react-date-picker__inputGroup__day").type(day);
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="apod-date"]')
      .should("be.visible")
      .and("have.text", `${year}-${month}-${day}`);
    //cy.screenshot();
  });

  it("shows and hides loader/spinner", () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept("/apod/*", (request) => {
      return trigger.then(() => {
        request.reply();
      });
    });

    cy.get(".react-date-picker__inputGroup__year").type("2012");
    cy.get(".react-date-picker__inputGroup__month").type("03");
    cy.get(".react-date-picker__inputGroup__day").type("25");
    cy.get('[data-testid="search-button"]').click();

    cy.get('[data-testid="revolving-dot-loading"]')
      .should("be.visible")
      .then(() => {
        // once the spinner is asserted call the resolve function of the above Promise
        // to allow the response to the data request to occur
        sendResponse();
        // assert the spinner is gone and the image is shown
        cy.get('[data-testid="revolving-dot-loading"]').should("not.exist");
        cy.get('[data-testid="apod-image"]').should("be.visible");
      });
  });

  it("has correct url", () => {
    cy.url().should("equal", `${Cypress.config().baseUrl}${ARCHIVE}`);
  });
});
