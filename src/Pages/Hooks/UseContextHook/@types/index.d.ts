import { ChangeEvent } from 'react';

export interface ProductProps {
  id?: number;
  name: string;
  description: string;
}

export interface ProductsContextProps {
  products: ProductProps[];
  productName: string;
  productDescription: string;
  productNameHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  productDescriptionHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  addProduct: () => void;
  removeProduct: (id: number) => void;
}
