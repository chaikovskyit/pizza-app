import React from 'react';

const Orders = ({ orders }) => {
	return (
		<div className='orders'>
			<h3>Your orders</h3>
			<hr />
			{orders.reverse().map((el, index) => (
				<div className='order-item'>
					<h3>{index + 1}</h3>
					<p>{el.join(', ')}</p>
				</div>
			))}
		</div>
	);
};

export default Orders;
