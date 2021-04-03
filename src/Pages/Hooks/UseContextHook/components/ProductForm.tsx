import { useContext } from 'react';

import { ProductsContext } from '../contexts/ProductsContext';

export const ProductForm = () => {
  const {
    productName,
    productDescription,
    productNameHandler,
    productDescriptionHandler,
    addProduct,
    productFormHandler,
  } = useContext(ProductsContext);

  return (
    <form onSubmit={productFormHandler}>
      <input type='text' value={productName} onChange={productNameHandler} />
      <textarea
        name='productDescription'
        id='productDescription'
        cols={30}
        rows={10}
        value={productDescription}
        onChange={productDescriptionHandler}
      />
      <button type='submit' onClick={addProduct}>
        Adicionar
      </button>
    </form>
  );
};
