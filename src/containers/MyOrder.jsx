import { useContext } from 'react';
import { OrderItem } from '@components/OrderItem.jsx';
import { AppContext } from '@context/AppContext.js';
import '@styles/MyOrder.scss';

import arrowIcon from '@icons/flechita.svg';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = state.cart.reduce((acc, item) => acc + item.price, 0);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
        {state.cart.map(product => (
          <OrderItem key={`orderItem-${product.id}`} product={product} />
        ))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export { MyOrder };
