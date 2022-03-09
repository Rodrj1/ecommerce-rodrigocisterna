import { NavLink } from "react-router-dom";
import CartIcon from "../../icons/CartIcon.js";
import MenuIcon from "../../icons/MenuIcon.js";

export const NavBarDetail = ({ toggleMenu, isActive }) => {
  return (
    <div className="nav-main">
      <h1>REACT APP</h1>

      <div>
        <NavLink to="/" className="nav-main-navlink">
          HOME
        </NavLink>

        <li>
          <div onClick={toggleMenu}>
            <MenuIcon />
            CATEGORIES
          </div>
        </li>

        <NavLink to="category/Phones" className="li-text">
          {isActive ? "PHONES" : null}
        </NavLink>

        <NavLink to="category/Cameras" className="li-text">
          {isActive ? "CAMERAS" : null}
        </NavLink>

        <NavLink to="/Cart" className="nav-main-navlink">
          <CartIcon />
          GO TO CART
        </NavLink>

        <NavLink to="/orders" className="nav-main-navlink">
          MY ORDERS
        </NavLink>

      </div>
    </div>
  );
};
