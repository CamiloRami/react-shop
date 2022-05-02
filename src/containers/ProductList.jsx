import { useEffect, useState } from 'react';
import { ProductItem } from '@components/ProductItem.jsx';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async() => {
    const response = await fetch(API)
    const data = await response.json()
    setProducts(data)
  }, [])

	return (
		<section className="main-container">
			<div className="ProductList">
        {products.map(product => (
          <ProductItem />
        ))}
			</div>
		</section>
	);
}

export { ProductList };
