import { ProductProps } from '../@types';

import { Container } from '../styles/ProductCard';

export const ProductCard = ({ name, description }: ProductProps) => {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
};
