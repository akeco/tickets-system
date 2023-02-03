import React from "react";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";

const NavLink: React.FC<NavLinkProps> = ({ children, className, ...props }) => {
  return (
    <RouterNavLink
      role="navlink"
      {...props}
      className={({ isActive }) =>
        clsx("mr-4 px-3 py-1 hover:bg-gray-100 rounded-md", className, {
          "bg-gray-100": isActive,
        })
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
