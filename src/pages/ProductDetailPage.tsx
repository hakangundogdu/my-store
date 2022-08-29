import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../store/product-context';
import ProductDetails from '../components/ProductDetails';

const ProductDetailPage: React.FC = () => {
  type Params = {
    id: string;
  };

  const params = useParams<Params>();
  const { getProduct, product } = useProduct();

  useEffect(() => {
    getProduct(params.id!);
  }, []);

  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
