describe('Fluxo calculo de frete com desconto - Testes positivos e negativos', () => {
    beforeEach(() => {
      cy.visitSuperFrete();
    });
    
    it.only('CT01 - Fluxo com sucesso', () => {
      cy.get('#originPostcode').type('08090-284')
      cy.selectObjectFormat('1')
      cy.selectWeight('0.3')
      cy.enterPackageDimensions('2', '11', '16')
      cy.enterDestinationPostCode('05407-002')
      cy.buttonCalculateFreight()
      cy.verifyFreight()
    })
  
    it('CT02. Validação de erro - usuário não informa CEP de origem', () => {
      cy.selectObjectFormat('1')
      cy.selectWeight('0.3')
      cy.enterPackageDimensions('2', '11', '16')
      cy.enterDestinationPostCode('05407-002')
      cy.buttonCalculateFreight()
      cy.get('#originPostcode-helper-text').should('contain', 'CEP de origem é obrigatório')
    });
  
    it.only('CT03. Validação de erro - usuário não informa CEP de destino', () => {
      cy.get('#originPostcode').type('08090-284')
      cy.selectObjectFormat('1')
      cy.selectWeight('0.3')
      cy.enterPackageDimensions('2', '11', '16')
      cy.buttonCalculateFreight()
      cy.get('#destinationPostcode-helper-text').should('contain', 'CEP de destino é obrigatório')
    });
    it('CT04. Validação de erro - usuário informa altura > 0.4 cm, largura > 8 cm e comprimento > 13 cm', () => {
      cy.get('#originPostcode').type('08090-284')
      cy.selectObjectFormat('1')
      cy.selectWeight('0.3')
      cy.enterPackageDimensions('0.3', '7', '12')
      cy.enterDestinationPostCode('05407-002')
      cy.buttonCalculateFreight()
      cy.verifyPackageDimensionsError()
    });
  })