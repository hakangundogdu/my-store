import { Product } from '../type';

interface ProductProps {
  product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="my-8 max-w-2xl ">
      <nav className="flex mb-4">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {product.category}
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex items-center flex-col md:flex-row ">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-center border border-slate-100 object-contain p-2 rounded-lg overflow-hidden"
        />
        <div className="ml-12 py-12 w-1/2 h-80 flex flex-col justify-between">
          <div className="  bg-indigo-100 text-center font-bold text-sm text-indigo-800 px-4 py-1 w-max rounded-lg  ">
            {product.category}
          </div>
          <div className="h-1/2 ">
            <h3 className="text-2xl font-bold text-slate-900">
              {product.title}
            </h3>
            <p className="text-xl font-medium text-slate-800">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
      <p className=" mt-6 border-slate-200 border-t pt-5  text-slate-800">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
