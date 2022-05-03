import { useGetProducts } from '@hooks/useGetProducts';
import { ProductItem } from '@components/ProductItem.jsx';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
        {products.map(product => (
          product.id === 2 ? null : <ProductItem product={product} key={product.id} /> // product.id === 2 does not have a src attribute 
        ))}
			</div>
		</section>
	);
}

export { ProductList };
