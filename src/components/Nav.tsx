import { useState } from 'react';
import { useProduct } from '../store/product-context';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Nav: React.FC = () => {
  return (
    <nav className="  flex justify-between h-12 px-2 mx-auto pb-4 border-b border-slate-300">
      <a href="/" className="flex items-center ">
        <p className="text-2xl font-bold text-rose-500">My Store</p>
      </a>
      {/* <form>
        <div className="flex">
          <div className="relative w-80">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-slate-50 rounded-lg focus:outline-none "
              placeholder="Search..."
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-slate-500 rounded-r-lg hover:bg-slate-200 hover:text-slate-900 "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form> */}

      <div className="flex items-center text-slate-700 ">
        <HiOutlineShoppingBag className="w-6 h-6 " />
        <p className="text-lg ml-2  text-slate-500">0</p>
      </div>
    </nav>
  );
};

export default Nav;
