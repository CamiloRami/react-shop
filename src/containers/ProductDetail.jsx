import { ProductInfo } from '../components/ProductInfo.jsx';
import '../styles/ProductDetail.scss';

import closeIcon from '@icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export { ProductDetail };
