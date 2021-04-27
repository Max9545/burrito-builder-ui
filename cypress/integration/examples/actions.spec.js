/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Have a header and display an order on the page' , () => {
    cy
    .get('h1').should('exist')
    .should('contain', 'Burrito Builder')
  })

  
})
