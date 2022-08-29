import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { Product } from '../type';

interface Props {
  children: React.ReactNode;
}
const API_BASE_URL = 'https://property-test.herokuapp.com/products/';

type ProductContextType = {
  getProductList: () => void;
  getProduct: (id: string) => void;
  getCategory: (category: string) => void;
  productList: Product[];
  product: Product;
  error: string | null;
  category: string;
};

const ProductContext = createContext<ProductContextType>({
  getProductList: () => {},
  getProduct: (id: string) => {},
  getCategory: (category: string) => {},
  productList: [],
  product: {} as Product,
  error: '',
  category: '',
});

export const ProductContextProvider: React.FC<Props> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>('');
  const [category, setCategory] = useState<string>('All Categories');

  //product that clicked.
  const [product, setProduct] = useState<Product>({} as Product);

  const getProductList = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setProductList(response.data);
    } catch (error) {
      setError('Could not fetch products.');
    }
  };

  const getProduct = async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${id}`);
      setProduct(response.data);
    } catch (error) {
      setError('Could not fetch product.');
    }
  };

  const getCategory = (category: string) => {
    setCategory(category);
  };

  const contextValue: ProductContextType = {
    getProductList,
    getProduct,
    productList,
    product,
    error,
    getCategory,
    category,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
