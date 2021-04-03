import { ChangeEvent, createContext, useState } from 'react';

import { ProductProps, ProductsContextProps } from '../@types';

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');

  const productNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const productDescriptionHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProductDescription(event.target.value);
  };

  const addProduct = () => {
    const newProduct: ProductProps = {
      id: Math.floor(Math.random() * 666),
      name: productName,
      description: productDescription,
    };

    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: number) => {
    const removedProduct = products.filter(product => product.id !== id);
    setProducts(removedProduct);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        productName,
        productDescription,
        productNameHandler,
        productDescriptionHandler,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
