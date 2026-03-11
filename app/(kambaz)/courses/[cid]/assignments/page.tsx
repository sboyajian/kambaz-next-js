"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import LessonControlButtons from "../modules/LessonControlButtons";
import ModuleControlButtons from "../modules/ModuleControlButtons";
import Link from "next/link";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  );
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const courseAssignments = assignments.filter((a: any) => a.course === cid);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments">
      {/* Delete Confirmation Dialog */}
      <Modal show={showDeleteDialog} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the assignment{" "}
          <strong>{assignmentToDelete?.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>

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

        {isFaculty && (
          <div>
            <button
              className="btn btn-outline-secondary me-2"
              id="wd-add-assignment-group"
            >
              <FaPlus className="me-1" /> Group
            </button>
            <button
              className="btn btn-danger"
              id="wd-add-assignment"
              onClick={() => router.push(`/courses/${cid}/assignments/new`)}
            >
              <FaPlus className="me-1" /> Assignment
            </button>
          </div>
        )}
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
              {isFaculty && <ModuleControlButtons />}
            </div>
          </div>

          <ListGroup className="rounded-0">
            {courseAssignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id}
                className="wd-assignment-list-item p-3 ps-1"
                style={{ borderLeft: "5px solid green" }}
              >
                <div className="d-flex align-items-start">
                  {isFaculty && <BsGripVertical className="me-2 fs-3" />}
                  <LuNotebookPen className="me-3 fs-5 text-success" />
                  <div className="flex-grow-1">
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-dark fw-bold text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-danger small">Multiple Modules</div>
                    <div className="small">
                      <span className="text-muted">Not available until</span>{" "}
                      {new Date(assignment.availableDate).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" },
                      )}{" "}
                      at 12:00am
                    </div>
                    <div className="small">
                      <span className="text-muted">Due</span>{" "}
                      {new Date(assignment.dueDate).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" },
                      )}{" "}
                      at 11:59pm | {assignment.points} pts
                    </div>
                  </div>
                  {isFaculty && (
                    <div className="d-flex align-items-center ms-2">
                      <LessonControlButtons />
                      <button
                        className="btn btn-sm text-danger ms-1"
                        id="wd-delete-assignment-btn"
                        onClick={() => handleDeleteClick(assignment)}
                        title="Delete Assignment"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
