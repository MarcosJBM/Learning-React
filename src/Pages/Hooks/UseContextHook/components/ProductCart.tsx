import { useContext } from 'react';

import { ProductsContext } from '../contexts/ProductsContext';

import { ProductCard } from './ProductCard';

import { Container } from '../styles/ProductCart';

export const ProductCart = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products.length > 0 ? (
        products.map(({ id, name, description }) => (
          <ProductCard key={String(id)} name={name} description={description} />
        ))
      ) : (
        <p>Sem produtos :(</p>
      )}
    </Container>
  );
};
