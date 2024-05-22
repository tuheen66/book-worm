import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
  
  return (
    <div className="flex flex-col lg:flex-row  justify-between items-center py-4">
      <div>
        <Link to={"/"} className=" text-3xl font-extrabold ">
          <span className="text-[#23BE0A] font-works">Book</span>
          <span className="text-[#59C6D2] font-works">Worm</span>
        </Link>
      </div>

      <div>
        <nav className="flex flex-col lg:flex-row my-4 list-none gap-2 lg:gap-8 items-center">
          <li>
            <NavLink to={"/"} className="font-works">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/about"} className="font-works ">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/listed-books"} className="font-works">
              Listed Books
            </NavLink>
          </li>

          <li>
            <NavLink to={"/pages-to-read"} className="font-works">
              Pages to Read
            </NavLink>
          </li>
        </nav>
      </div>

      <div >
        <div className="flex gap-6 lg:gap-4 font-works ">
          <a className="btn btn-sm lg:btn-md bg-[#23BE0A] text-white">
            Sign In
          </a>
          <a className="btn btn-sm lg:btn-md bg-[#59C6D2] text-white">
            Sign Up
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default NavBar;