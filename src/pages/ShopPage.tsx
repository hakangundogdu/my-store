import { useState, useEffect, useRef } from 'react';
import { useProduct } from '../store/product-context';

import ProductBox from '../components/ProductBox';
const ShopPage = () => {
  const { getProductList, productList, error, category } = useProduct();

  const categoryRef = useRef<HTMLSelectElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    getProductList();
  }, []);

  console.log(category);

  const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(categoryRef.current!.value);
  };

  const filteredList = productList.filter(
    (product) => product.category === category
  );

  const list = category === 'All Categories' ? productList : filteredList;

  return (
    <>
      <div className="my-8">
        <div className="mx-auto ">
          <div className="flex justify-between items-center w-full ">
            <div>
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 rounded-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                placeholder="Select Category"
                ref={categoryRef}
                defaultValue="All Categories"
                onChange={filterHandler}
              >
                <option>All Categories </option>
                <option value="Men's clothing">Men's Clothing</option>
                <option value="Jewelery">Jewelery</option>
                <option value="Electronics">Electronics</option>
                <option value="Women's clothing">Women's Clothing</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {list.length > 0 ? (
              list.map((product) => (
                <ProductBox product={product} key={product.id} />
              ))
            ) : (
              <p className="text-xl font-bold tracking-tight text-gray-900">
                {!error
                  ? selectedCategory !== 'All Categories'
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
