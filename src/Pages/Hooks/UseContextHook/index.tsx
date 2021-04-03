import { ProductCart } from './components/ProductCart';
import { ProductForm } from './components/ProductForm';

import { ProductsProvider } from './contexts/ProductsContext';

import { Container, RightSide } from './styles/UseContextHook';

export const UseContextHook = () => {
  return (
    <ProductsProvider>
      <Container>
        <ProductForm />
        <RightSide>
          <ProductCart />
        </RightSide>
      </Container>
    </ProductsProvider>
  );
};
