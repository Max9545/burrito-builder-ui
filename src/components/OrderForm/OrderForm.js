import React, { Component } from 'react';
import { postOrder } from '../../apiCalls';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name !== '' && this.state.ingredients.length) {
      postOrder(this.state.name, this.state.ingredients)
      .then(data => this.props.addNewOrder(data))
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleIngredientChange = (e, newIngredient) => {
    e.preventDefault();


    this.setState({ ingredients: [...this.state.ingredients, newIngredient]})


   
    // this.state.ingredients.forEach(ingredient => {
    //   const count = 0
    //   if(ingredient === newIngredient) {
    //     count + 1
    //     console.log(count)
    //     return count 


    //   }
  
    // })

    // if(this.state.ingredients.length) {
    //   this.state.ingredients.reduce((acc, ingredient) => {
    //     console.log(acc)
    //     return ingredient === newIngredient ? acc + 1 : acc
        
    //   },0)
    // }
    
    
  
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e, ingredient)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className='submit-button' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
