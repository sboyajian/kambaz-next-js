"use client";
import { useParams } from "next/navigation";
import * as db from "../../../../database";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <div className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            defaultValue={assignment?.title ?? ""}
          />
        </div>

        <div className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            defaultValue={assignment?.description ?? ""}
          />
        </div>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="number"
              id="wd-points"
              defaultValue={assignment?.points ?? 100}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-display-grade-as">
              Display Grade as
            </Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-submission-type">
              Submission Type
            </Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" className="mb-3">
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
              </Form.Select>

              <Form.Label className="fw-bold mb-2">
                Online Entry Options
              </Form.Label>
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
                className="mb-2"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </Form.Label>
              <Form.Control
                type="text"
                id="wd-assign-to"
                defaultValue="Everyone"
                className="mb-3"
              />

              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due
              </Form.Label>
              <Form.Control
                type="datetime-local"
                id="wd-due-date"
                defaultValue={
                  assignment?.dueDate
                    ? `${assignment.dueDate}T23:59`
                    : "2024-05-13T23:59"
                }
                className="mb-3"
              />

              <Row>
                <Col md={6}>
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-from"
                    defaultValue={
                      assignment?.availableDate
                        ? `${assignment.availableDate}T12:00`
                        : "2024-05-06T12:00"
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="wd-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-until"
                    defaultValue={
                      assignment?.dueDate
                        ? `${assignment.dueDate}T23:59`
                        : "2024-05-20T23:59"
                    }
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Link href={`/courses/${cid}/assignments`}>
            <Button variant="secondary" id="wd-cancel">
              Cancel
            </Button>
          </Link>
          <Link href={`/courses/${cid}/assignments`}>
            <Button variant="danger" id="wd-save">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
