"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Nav from "react-bootstrap/esm/Nav";
import { NavItem, NavLink } from "react-bootstrap";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  ) as { currentUser: any };
  const links = currentUser ? ["profile"] : ["signin", "signup"];
  const pathname = usePathname();
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          {currentUser && currentUser.role === "ADMIN" && (
            <NavLink
              as={Link}
              href={`/account/users`}
              active={pathname.endsWith("Users")}
            >
              {" "}
              Users{" "}
            </NavLink>
          )}
          <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
            {link}{" "}
          </NavLink>{" "}
        </NavItem>
      ))}
    </Nav>
  );
}
