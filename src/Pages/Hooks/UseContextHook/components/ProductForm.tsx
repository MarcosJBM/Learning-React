import { useContext } from 'react';

import { ProductsContext } from '../contexts/ProductsContext';

import { Form, Button } from '../styles/ProductForm';

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
    <Form onSubmit={productFormHandler}>
      <input type='text' value={productName} onChange={productNameHandler} />
      <textarea
        name='productDescription'
        id='productDescription'
        cols={30}
        rows={10}
        value={productDescription}
        onChange={productDescriptionHandler}
      />
      <Button type='submit' onClick={addProduct}>
        Adicionar
      </Button>
    </Form>
  );
};
