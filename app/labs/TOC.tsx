"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink
          as={Link}
          href="/labs"
          className={`nav-link ${pathname.endsWith("labs") ? "active" : ""}`}
        >
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab1"
          className={`nav-link ${pathname.endsWith("lab1") ? "active" : ""}`}
        >
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab2"
          className={`nav-link ${pathname.endsWith("lab2") ? "active" : ""}`}
        >
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab3"
          className={`nav-link ${pathname.endsWith("lab3") ? "active" : ""}`}
        >
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab4"
          className={`nav-link ${pathname.endsWith("lab4") ? "active" : ""}`}
        >
          Lab 4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/">
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="https://github.com/sboyajian/kambaz-next-js/tree/main"
          target="_blank"
        >
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
