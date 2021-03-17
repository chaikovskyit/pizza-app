import React from 'react'
import PizzaIcon from '../assets/images/pizza.jpeg'

const PizzaCard = ({ingridients, name, handleOrder}) => (
  <div 
    className='pizza-card'
    onClick={() => handleOrder(name)}
  >
    <div className="card">
      <img src={PizzaIcon} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <ul className="list-group list-group-flush">  
          {Object.keys(ingridients).map(key => (
            <li key={key}>{key}: {ingridients[key]}</li>
          ))}      
        </ul>
      </div>
    </div>
  </div>
)

export default PizzaCard