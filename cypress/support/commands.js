Cypress.Commands.add('visitSuperFrete', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://web.superfrete.com/');
    cy.reload();
    cy.wait(10000);
});

Cypress.Commands.add('selectObjectFormat', (value) => {
    cy.get('#object_format').click();
    cy.get(`[data-value="${value}"]`).as('objectFormatOption');
    cy.get('@objectFormatOption').click()
});

Cypress.Commands.add('selectWeight', (value) => {
    cy.get('#weight').click()
    cy.get(`[data-value="${value}"]`).as('weightOption')
    cy.get('@weightOption').click()
});

Cypress.Commands.add('enterPackageDimensions', (height, width, depth) => {
    cy.get('[data-cy="calculator-packageHeight"]').type(height).should('be.visible')
    cy.get('[data-cy="calculator-packageWidth"]').type(width).should('be.visible')
    cy.get('[data-cy="calculator-packageDepth"]').type(depth).should('be.visible')
});

Cypress.Commands.add('enterDestinationPostCode', (postcode) => {
    cy.get('[data-cy="calculator-destinationPostCode"]').type(postcode).should('be.visible')
});

Cypress.Commands.add('buttonCalculateFreight', () => {
    cy.contains('button', 'CALCULAR FRETE COM DESCONTO').click()
});

Cypress.Commands.add('verifyFreight', () => {
    cy.get(`#calculator-package-type-PAC-container > .MuiGrid-grid-xs-2`, { timeout: 5000 }).should('be.visible').contains('PAC')
    cy.get(`#calculator-package-type-SEDEX-container > .MuiGrid-grid-xs-2 > .MuiTypography-root`).should('be.visible').contains('SEDEX')
    //Elemento do Frete Mini Envios não encontrado, impossibilitando fazer o script de validação.
});

Cypress.Commands.add('verifyPackageDimensionsError', () => {
    cy.get('#packageHeight-helper-text').should('be.visible').and('contain', 'Altura mínima 0.4 cm.');
    cy.get('#packageWidth-helper-text').should('be.visible').and('contain', 'Largura mínima 8 cm.');
    cy.get('#packageDepth-helper-text').should('be.visible').and('contain', 'Comprimento mínimo 13 cm.');
});



