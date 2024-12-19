import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <nav className="p-10 border-r h-svh">
      <h3 className="text-2xl text-gray-700">Dashboard</h3>

      <ul className="px-2 py-5">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-500")}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-500")}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
