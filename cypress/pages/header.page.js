class Header {
  getLogoImage() {
    return cy.get('[data-testid="header-logo-image"]');
  }

  getHomeLink() {
    return cy.get('[data-testid="header-logo-home-link"]');
  }

  getApodLink() {
    return cy.get('[data-testid="apod-link"]');
  }

  getArchiveLink() {
    return cy.get('[data-testid="archive-link"]');
  }
}

export default Header;
