import { ProductItem } from '../components/ProductItem.jsx';
import '../styles/ProductList.scss';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export { ProductList };