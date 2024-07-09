Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
    
require('cypress-xpath');

Cypress.Commands.add('findByXpath', (xpath, options) => {
    cy.xpath(xpath, options);
});


import './commands'
