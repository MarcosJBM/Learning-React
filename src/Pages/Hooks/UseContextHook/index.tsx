import { ProductCart } from './components/ProductCart';
import { ProductForm } from './components/ProductForm';

import { ProductsProvider } from './contexts/ProductsContext';

export const UseContextHook = () => {
  return (
    <ProductsProvider>
      <ProductForm />
      <ProductCart />
    </ProductsProvider>
  );
};
