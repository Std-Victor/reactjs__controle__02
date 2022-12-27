import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./menu.style.module.css";

const Menu = () => {
  const location = useLocation();
  return (
    <nav className={style.navbar}>
      <div className={style.nav__links}>
        <ul>
          <li>
            <NavLink
              className={location.pathname === "/" ? style.active : ""}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={location.pathname === "/q3" ? style.active : ""}
              to="/q3"
            >
              Q3
            </NavLink>
          </li>
          <li>
            <NavLink
              className={location.pathname === "/q4" ? style.active : ""}
              to="/q4"
            >
              Q4
            </NavLink>
          </li>
          <li>
            <NavLink
              className={location.pathname === "/q5" ? style.active : ""}
              to="/q5"
            >
              Q5
            </NavLink>
          </li>
          <li>
            <NavLink
              className={location.pathname === "/q6" ? style.active : ""}
              to="/q6"
            >
              Q6
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;