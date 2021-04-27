/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy
    .intercept('GET','http://localhost:3001/api/v1/orders', { fixture: 'orders'})
    .intercept('POST','http://localhost:3001/api/v1/orders', {
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

  it('Have a form with all the correct buttons to choose from' , () => {
    cy
    .get('button').should('contain', 'beans')
    .get('button').should('contain', 'steak')
    .get('button').should('contain', 'carnitas')
    .get('button').should('contain', 'sofritas')
    .get('button').should('contain', 'lettuce')
    .get('button').should('contain', 'queso fresco')
    .get('button').should('contain', 'pico de gallo')
    .get('button').should('contain', 'hot sauce')
    .get('button').should('contain', 'guacamole')
    .get('button').should('contain', 'jalapenos')
    .get('button').should('contain', 'cilantro')
    .get('button').should('contain', 'sour cream')
  })

  it('Should have a form that has a name input and ingredients selection that lists current ingredients to be added and then makes new recipe card appear on page when the recipe is succefully subbmited to the server.' , () => {
    cy
    .get('form').should('exist')
    .get('input[name=name]').should('exist')
    .should('have.attr', 'placeholder', 'Name')
    .type('Max B')
    .get('input[name=name]').should('have.attr', 'value', 'Max B')
    .get('p').should('exist')
    .should('contain', 'Order: Nothing selected')
    .get('button').first().should('exist')
    .click()
    .get('p').should('exist')
    .should('contain', 'beans')
    .get('.submit-button').should('exist')
    .should('contain', 'Submit Order')
    .click()
    .get('.order').last().should('exist')
    .should('contain', 'Max B')
    .should('contain', 'beans')
  })
  
})
