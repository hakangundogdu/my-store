import { useEffect } from 'react';
import { useProduct } from '../store/product-context';

import ProductBox from '../components/ProductBox';
const ShopPage = () => {
  const { getProductList, productList, error, category, getCategory } =
    useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  const filteredList = productList.filter(
    (product) => product.category === category
  );

  const list = category === 'All categories' ? productList : filteredList;

  const categories: Array<string> = [
    'All categories',
    "Women's clothing",
    "Men's clothing",
    'Jewelery',
    'Electronics',
  ];

  const activeButtonStyle =
    'border text-sm hover:border-slate-500 border-slate-200 py-2 px-6  rounded-lg text-white bg-slate-500 mt-4 md:mt-0 hover:text-slate-700 font-semibold ';
  const buttonStyle =
    'border text-sm hover:border-slate-500 border-slate-200 text-slate-500 py-2 px-6 rounded-lg mt-4 md:mt-0 hover:text-slate-700 font-semibold ';

  return (
    <>
      <div className="my-8">
        <div className="mx-auto ">
          <div
            className={
              ' flex flex-wrap justify-start space-x-3 max-w-screen-lg'
            }
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => getCategory(cat)}
                className={cat === category ? activeButtonStyle : buttonStyle}
              >
                {cat}{' '}
              </button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {list.length > 0 ? (
              list.map((product) => (
                <ProductBox product={product} key={product.id} />
              ))
            ) : (
              <p className="text-xl font-bold tracking-tight text-gray-900">
                {!error
                  ? category !== 'All categories'
                    ? 'No Products in this category'
                    : 'Loading...'
                  : error}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
