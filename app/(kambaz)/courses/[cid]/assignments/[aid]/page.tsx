"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : (cid as string);
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer,
  );
  const existing =
    aid !== "new" ? assignments.find((a: any) => a._id === aid) : undefined;

  const [assignment, setAssignment] = useState(
    existing ?? {
      title: "New Assignment",
      course: courseId,
      description: "",
      points: 100,
      dueDate: "",
      availableDate: "",
      availableUntilDate: "",
    },
  );

  const isNew = !existing;

  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/courses/${courseId}/assignments`);
  };

  const handleCancel = () => {
    router.push(`/courses/${courseId}/assignments`);
  };

  return (
    <div
      id="wd-assignments-editor"
      className="container mt-4"
      style={{ maxWidth: "800px" }}
    >
      <h2>{isNew ? "New Assignment" : "Edit Assignment"}</h2>
      <hr />
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label fw-bold">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={6}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="mb-3 row align-items-center">
        <label
          htmlFor="wd-points"
          className="col-sm-3 col-form-label fw-bold text-end"
        >
          Points
        </label>
        <div className="col-sm-9">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label
          htmlFor="wd-due-date"
          className="col-sm-3 col-form-label fw-bold text-end"
        >
          Due Date
        </label>
        <div className="col-sm-9">
          <input
            id="wd-due-date"
            type="datetime-local"
            className="form-control"
            value={assignment.dueDate?.slice(0, 16) ?? ""}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label
          htmlFor="wd-available-from"
          className="col-sm-3 col-form-label fw-bold text-end"
        >
          Available From
        </label>
        <div className="col-sm-9">
          <input
            id="wd-available-from"
            type="datetime-local"
            className="form-control"
            value={assignment.availableDate?.slice(0, 16) ?? ""}
            onChange={(e) =>
              setAssignment({ ...assignment, availableDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label
          htmlFor="wd-available-until"
          className="col-sm-3 col-form-label fw-bold text-end"
        >
          Available Until
        </label>
        <div className="col-sm-9">
          <input
            id="wd-available-until"
            type="datetime-local"
            className="form-control"
            value={assignment.availableUntilDate?.slice(0, 16) ?? ""}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                availableUntilDate: e.target.value,
              })
            }
          />
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end gap-2">
        <button
          className="btn btn-secondary"
          id="wd-cancel-assignment-editor"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="btn btn-danger"
          id="wd-save-assignment-editor"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
