/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy
    .intercept('http://localhost:3001/api/v1/orders', { fixture: 'orders'})
    .visit('http://localhost:3000')
  })

  it('Have a header and display an order on the page' , () => {
    cy
    .get('h1').should('exist')
    .should('contain', 'Burrito Builder')
    .get('.order').first().should('exist')
    .get('h3').should('exist')
    .should('contain', 'Pat')
    .get('ul')
    .should('contain','beans')
    .should('contain','lettuce')
    .should('contain','carnitas')
    .should('contain', 'queso fresco')
    .should('contain', 'jalapeno')
  })
  
})
