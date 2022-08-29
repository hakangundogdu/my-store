import { BiStore } from 'react-icons/bi';

const Nav: React.FC = () => {
  return (
    <nav className="  flex justify-between h-12 px-2 mx-auto pb-4 border-b-2 border-slate-100">
      <a href="/" className="flex items-center ">
        {/* <BiStore className="text-3xl text-lime-500" /> */}
        <p className="text-2xl font-bold text-slate-900">My Store</p>
      </a>

      <button className="hover:text-lime-600  text-slate-600">Cart </button>
    </nav>
  );
};

export default Nav;
