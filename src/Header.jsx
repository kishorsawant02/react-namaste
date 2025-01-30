import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="logo">
        <img src="" alt="" className="img-logo" />
      </div>
      <div className="navbar flex justify-evenly">
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/contact" className="mx-2 nav-items bg-red-200">
          Contact us
        </Link>
        <Link to="/aboutus" className="mx-2 nav-items p-2">
          <span className="nav-items">About Us</span>
        </Link>
        <Link to="/cities" className="mx-2 nav-items">
          cities
        </Link>
      </div>
    </div>
  );
};
export default Header;
