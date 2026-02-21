"use client";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/inbox", icon: FaInbox },
    { label: "Labs", path: "/labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/account"
        className={`text-center border-0
          ${pathname.includes("/account") ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <span
          className={`rounded p-1 d-inline-flex align-items-center justify-content-center
          ${pathname.includes("/account") ? "bg-white" : "bg-black"}`}
        >
          <FaRegCircleUser className="fs-1 text-danger" />
        </span>
        <br />
        Account
      </ListGroupItem>

      {links.map((link) => {
        const isActive = pathname.includes(link.path);
        return (
          <ListGroupItem
            key={link.path}
            as={Link}
            href={link.path}
            className={`text-center border-0
              ${isActive ? "text-danger bg-white" : "text-white bg-black"}`}
          >
            <span
              className={`rounded p-1 d-inline-flex align-items-center justify-content-center
              ${isActive ? "bg-white" : "bg-black"}`}
            >
              {link.icon({ className: "fs-1 text-danger" })}
            </span>
            <br />
            {link.label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
