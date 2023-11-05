import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const navLinkStyles = "text-white font-bold hover:text-yellow-300 p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-110";
  const navLink = (
    <div className="flex flex-col gap-5 lg:flex-row">
      <li>
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct" className={navLinkStyles}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart/myCart" className={navLinkStyles}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/partners" className={navLinkStyles}>Our Partners</NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className={navLinkStyles}>Gallery</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

