describe('Amazon search and add to cart', () => {

  it('search → open product → add to cart → open cart', () => {

    // Step 1: Go to Amazon
    cy.visit('https://www.amazon.in');

    // Step 2: Search for keyword
    cy.get('#twotabsearchtextbox').type('smartphone charger');
    cy.get('#nav-search-submit-button').click();

    // Ensure results loaded
    cy.get('[data-component-type="s-search-result"]').should('exist');

    // Step 3: Click first result BUT force same tab
    cy.get('[data-component-type="s-search-result"]')
      .first()
      .find('a')
      .first()
      .invoke('removeAttr', 'target')   // remove new-tab behavior
      .click();

    // Step 4: Wait for product page
    cy.get('#productTitle').should('be.visible');

    // Step 5: Click Add to Cart
    cy.get('#add-to-cart-button').click({ force: true });

    // Step 6: Open Cart
    cy.get('#nav-cart').click();

    // Validate cart opened
    cy.url().should('include', 'cart');
  });
});
