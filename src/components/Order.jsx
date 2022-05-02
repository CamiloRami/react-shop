import '@styles/Order.scss';

import arrowIcon from '@icons/flechita.svg';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={arrowIcon} alt="arrow" />
		</div>
	);
}

export { Order };
