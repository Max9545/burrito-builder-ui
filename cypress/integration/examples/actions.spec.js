/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy
    .intercept('GET','http://localhost:3001/api/v1/orders', { fixture: 'orders'})
    .intercept('POST','http://localhost:3001/api/v1/order', {
      statusCode: 200,
      body: {id: 2, name: "Max B", ingredients: ["beans"]}
    })
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

  it('Should have a form that can have a name input and ingredients selection that appears on page when the recipe is succefully subbmited to the server' , () => {
    cy
    .get('form').should('exist')
    .get('input[name=name]').should('exist')
    .should('have.attr', 'placeholder', 'Name')
    .type('Max B')
    .get('input[name=name]').should('have.attr', 'value', 'Max B')
    .get('button').first().should('exist')
    .click()
    .get('.submit-button').should('exist')
    .click()


  })
  
})
