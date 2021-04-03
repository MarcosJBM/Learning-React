import { ProductProps } from '../@types';

export const ProductCard = ({ name, description }: ProductProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
