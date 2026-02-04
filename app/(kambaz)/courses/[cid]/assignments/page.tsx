import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import LessonControlButtons from "../modules/LessonControlButtons";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            id="wd-add-assignment-group"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill border border-dark me-2">
                40% of Total
              </span>
              <ModuleControlButtons />
            </div>
          </div>

          <ListGroup className="rounded-0">
            <ListGroupItem
              className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: "5px solid green" }}
            >
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen className="me-3 fs-5 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/courses/1234/assignments/123"
                    className="wd-assignment-link text-dark fw-bold text-decoration-none"
                  >
                    A1
                  </Link>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="small">
                    <span className="text-muted">Not available until</span> May
                    6 at 12:00am
                  </div>
                  <div className="small">
                    <span className="text-muted">Due</span> May 13 at 11:59pm |
                    100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>

            <ListGroupItem
              className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: "5px solid green" }}
            >
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen className="me-3 fs-5 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/courses/1234/assignments/124"
                    className="wd-assignment-link text-dark fw-bold text-decoration-none"
                  >
                    A2
                  </Link>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="small">
                    <span className="text-muted">Not available until</span> May
                    13 at 12:00am
                  </div>
                  <div className="small">
                    <span className="text-muted">Due</span> May 20 at 11:59pm |
                    100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>

            <ListGroupItem
              className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: "5px solid green" }}
            >
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen className="me-3 fs-5 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/courses/1234/assignments/125"
                    className="wd-assignment-link text-dark fw-bold text-decoration-none"
                  >
                    A3
                  </Link>
                  <div className="text-danger small">Multiple Modules</div>
                  <div className="small">
                    <span className="text-muted">Not available until</span> May
                    20 at 12:00am
                  </div>
                  <div className="small">
                    <span className="text-muted">Due</span> May 27 at 11:59pm |
                    100 pts
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
