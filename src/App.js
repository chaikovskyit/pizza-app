import React, { useState } from 'react';
import PizzaList from './components/PizzaList';

const App = () => {
	const [orders, setOrders] = useState([]);
	const [currentOrder, setCurrentOrder] = useState([]);

	const makePizzaOrder = (name) => {
		setCurrentOrder([...currentOrder, name]);
	};

	const confirmOrder = () => {
		setOrders([...orders, currentOrder]);
		setCurrentOrder([]);
	};

	const resetOrders = () => {
		setCurrentOrder([]);
		setOrders([]);
	};

	return (
		<div className='container'>
			<PizzaList
				makePizzaOrder={makePizzaOrder}
				confirmOrder={confirmOrder}
				resetOrders={resetOrders}
				currentOrder={currentOrder}
				orders={orders}
			/>
		</div>
	);
};

export default App;
