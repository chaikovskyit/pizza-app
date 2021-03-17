import React from 'react';
import { getPizzaInfo } from '../getPizzaInfo';
import { v4 as uuidv4 } from 'uuid';

const Statistics = ({ joinedOrders }) => {
	const pizzaInfo = getPizzaInfo(joinedOrders);
	const { popular, ingridients } = pizzaInfo;

	return (
		<div className='statistics'>
			<div>
				<h3>Top 5 pizzas</h3>
				<hr />
				<ul className='list-group'>
					{popular.map((el) => (
						<li key={uuidv4()}>{el}</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Top ingridients</h3>
				<hr />
				<ul className='list-group'>
					{ingridients.map((el) => (
						<li key={uuidv4()}>{el}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Statistics;
