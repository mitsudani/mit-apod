/// <reference types="cypress" />

import { APOD, ARCHIVE, HOME } from "../../src/constants/routes";
import Header from "../pages/header.page";

describe("Header", () => {
  const header = new Header();

  beforeEach(() => {
    cy.visit(HOME);
  });

  it("has links with correct routes", () => {
    header.getHomeLink().should("have.attr", "href", HOME);
    header.getApodLink().should("have.attr", "href", APOD);
    header.getArchiveLink().should("have.attr", "href", ARCHIVE);
  });

  it("renders logo", () => {
    header.getLogoImage().should("be.visible");
  });
});
