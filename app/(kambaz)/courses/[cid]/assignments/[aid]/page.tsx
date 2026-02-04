import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <div className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control type="text" id="wd-name" defaultValue="A1" />
        </div>

        <div className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            defaultValue="The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page."
          />
        </div>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control type="number" id="wd-points" defaultValue={100} />
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
                defaultValue="2024-05-13T23:59"
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
                    defaultValue="2024-05-06T12:00"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="wd-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-until"
                    defaultValue="2024-05-20T23:59"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" id="wd-cancel">
            Cancel
          </Button>
          <Button variant="danger" id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
