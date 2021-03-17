import React from 'react';
import Orders from './Orders';
import PizzaCard from './PizzaCard';
import Statistics from './Statistics';
import pizzasMenu from '../pizzasMenu.json';
import { joinOrders } from '../helpers';

const PizzaList = ({ makePizzaOrder, confirmOrder, resetOrders, currentOrder, orders }) => (
	<div>
		<h1>PizzaList</h1>
		<div className='pizza-card-list'>
			{Object.keys(pizzasMenu).map((key) => (
				<PizzaCard
					key={key}
					ingridients={pizzasMenu[key]}
					name={key}
					handleOrder={makePizzaOrder}
				/>
			))}
		</div>

		<button
			disabled={currentOrder.length === 0}
			type='button'
			className='btn btn-success mr-2'
			onClick={confirmOrder}
		>
			{currentOrder.length} Confirm order
		</button>
		<button
			disabled={orders.length === 0}
			type='button'
			className='btn btn-danger'
			onClick={resetOrders}
		>
			{orders.length} Reset orders
		</button>
		<div className='navigation'>
			<Orders orders={orders} />
			<Statistics joinedOrders={joinOrders(orders)} />
		</div>
	</div>
);

export default PizzaList;
