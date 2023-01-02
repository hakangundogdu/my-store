import { useEffect } from 'react';
import { useProduct } from '../store/product-context';
import { Link } from 'react-router-dom';

import { HiArrowSmRight } from 'react-icons/hi';

const HomePage = () => {
  const { getProductList, getCategory, category } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  const activeCategory = category;

  return (
    <div className="max-w-7xl mx-auto mb-8 ">
      <div className="max-w-2xl mx-auto py-4 px-2 lg:max-w-none">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
          <Link to="/shop">
            <button
              onClick={() => {
                getCategory('All categories');
              }}
              className="flex  text-slate-700 items-center"
            >
              <p className="mr-2 font-semibold">Browse all categories </p>
              <HiArrowSmRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
      <Link to="/shop">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mx-auto relative">
          <div
            onClick={() => {
              getCategory("Women's clothing");
            }}
            className="relative max-w-2xl lg:max-w-none h-80 bg-gray-300 overflow-hidden rounded-lg col-span-1 md:col-span-2 hover:opacity-75 "
          >
            <img
              src="https://source.unsplash.com/Tw9iB8TGRGI"
              alt="Women's clothing"
              className="w-full h-full object-center brightness-90 object-cover"
            />
            <div className=" absolute z-10 bottom-6 left-10">
              <h2 className="text-xl text-slate-900 font-semibold title-font mb-2">
                Women's Clothing{' '}
              </h2>
            </div>
          </div>
          <div
            onClick={() => {
              getCategory("Men's clothing");
            }}
            className="relative max-w-2xl lg:max-w-none h-80 bg-gray-300 overflow-hidden rounded-lg col-span-1 md:col-span-2 md:order-4 hover:opacity-75 "
          >
            <img
              src="https://source.unsplash.com/Nv4QHkTVEaI"
              alt="Women's clothing"
              className="w-full h-full object-center brightness-90 object-cover"
            />
            <div className=" absolute z-10 bottom-6  left-10">
              <h2 className="text-xl text-slate-900 font-semibold title-font mb-2">
                Men's Clothing{' '}
              </h2>
            </div>
          </div>
          <div
            onClick={() => {
              getCategory('Jewelery');
            }}
            className="  relative max-w-2xl lg:max-w-none h-80 bg-gray-300 overflow-hidden rounded-lg col-span-1 hover:opacity-75 "
          >
            <img
              src="https://source.unsplash.com/CCpQ12CZ2Pc"
              alt="Women's clothing"
              className="w-full h-full object-center brightness-90 object-cover"
            />
            <div className=" absolute z-10 bottom-6 left-10">
              <h2 className="text-xl text-slate-900 font-semibold  title-font mb-2">
                Jewelery
              </h2>
            </div>
          </div>

          <div
            onClick={() => {
              getCategory('Electronics');
            }}
            className=" relative max-w-2xl lg:max-w-none h-80 bg-gray-300 overflow-hidden rounded-lg col-span-1  hover:opacity-75 "
          >
            <img
              src="https://source.unsplash.com/WuFjNk7hu7g"
              alt="Women's clothing"
              className="w-full h-full object-center brightness-90 object-cover"
            />
            <div className=" absolute z-10 bottom-6 left-10">
              <h2 className="text-xl text-slate-900 font-semibold  title-font mb-2">
                Electronics
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
