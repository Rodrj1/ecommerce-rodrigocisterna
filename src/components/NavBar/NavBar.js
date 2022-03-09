import "./Nav.css";
import { NavBarDetail } from "./NavBarDetail";
import { useState } from "react";

function NavBar() {

  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <NavBarDetail toggleMenu={toggleMenu} isActive={isActive}/>
  );
}

export default NavBar;
