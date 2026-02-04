"use client";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();

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
        className={`border-0 text-center text-decoration-none ${
          pathname === "/account" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/account"
        id="wd-account-link"
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname === "/account" ? "text-danger" : "text-white"
          }`}
        />
        <div className={pathname === "/account" ? "text-danger" : "text-white"}>
          Account
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/dashboard" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/dashboard"
        id="wd-dashboard-link"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <div
          className={pathname === "/dashboard" ? "text-danger" : "text-white"}
        >
          Dashboard
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/courses" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/courses"
        id="wd-courses-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <div className={pathname === "/courses" ? "text-danger" : "text-white"}>
          Courses
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/groups" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/groups"
        id="wd-groups-link"
      >
        <BsPeople className="fs-1 text-danger" />
        <div className={pathname === "/groups" ? "text-danger" : "text-white"}>
          Groups
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/calendar" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/calendar"
        id="wd-calendar-link"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <div
          className={pathname === "/calendar" ? "text-danger" : "text-white"}
        >
          Calendar
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/inbox" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/inbox"
        id="wd-inbox-link"
      >
        <FaInbox className="fs-1 text-danger" />
        <div className={pathname === "/inbox" ? "text-danger" : "text-white"}>
          Inbox
        </div>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center text-decoration-none ${
          pathname === "/labs" ? "bg-white" : "bg-black"
        }`}
        as="a"
        href="/labs"
        id="wd-labs-link"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <div className={pathname === "/labs" ? "text-danger" : "text-white"}>
          Labs
        </div>
      </ListGroupItem>
    </ListGroup>
  );
}
