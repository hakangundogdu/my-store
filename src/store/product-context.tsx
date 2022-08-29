import { createContext, useState, useContext } from 'react';
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const API_BASE_URL = 'https://property-test.herokuapp.com/products';

type ProductContextType = {
  getProductList: () => void;
  getProduct: (id: string) => void;
  productList: Product[];
  product: Product;
  error: string | null;
};

const ProductContext = createContext<ProductContextType>({
  getProductList: () => {},
  getProduct: (id: string) => {},
  productList: [],
  product: {} as Product,
  error: '',
});

export const ProductContextProvider: React.FC<Props> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>('');

  //product that clicked.
  const [product, setProduct] = useState<Product>({} as Product);

  const getProductList = async () => {
    axios.get(API_BASE_URL).then(
      (response) => {
        console.log(response.data);
        setProductList(response.data);
      },
      (error) => {
        setError('Could not fetch products.');
      }
    );
  };

  const getProduct = async (id: string) => {
    const sample = {
      id: 1,
      title: 'sample',
      price: 15,
      category: 'jewelery',
      description: 'des',
      image: 'string',
      rating: {
        rate: 3,
        count: 12,
      },
    };
    setProduct(sample);
  };

  const contextValue: ProductContextType = {
    getProductList,
    getProduct,
    productList,
    product,
    error,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
