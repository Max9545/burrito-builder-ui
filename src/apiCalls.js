export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}


export const postOrder = (name, ingredients) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, ingredients: ingredients})
  })
      .then(response => response.json())
}

export const deleteOrder = (orderId) => {
  return fetch(`http://localhost:3001/api/v1/orders/${orderId}`, {
    method: 'DELETE'
  })
      .then(response => response.json())
}
