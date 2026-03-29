"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, Button, FormControl, Modal } from "react-bootstrap";
import * as client from "../courses/client";
import {
  enrollUserInCourse,
  unenrollUserFromCourse,
  fetchAllCourses,
  findMyCourses,
} from "../courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);

  const currentUser = useSelector(
    (state: RootState) =>
      state.accountReducer.currentUser as {
        _id: string;
        role: string;
        [key: string]: any;
      } | null,
  );

  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrollmentMap, setEnrollmentMap] = useState<Record<string, boolean>>(
    {},
  );

  // ✅ ONLY SOURCE OF TRUTH
  const fetchMyCourses = async () => {
    if (!currentUser) return;
    const myCourses = await findMyCourses();
    dispatch(setCourses(myCourses));
  };

  useEffect(() => {
    fetchMyCourses();
  }, [currentUser]);

  // ---------------- ENROLL MODAL ----------------

  const openEnrollModal = async () => {
    if (!currentUser) return;

    const [all, mine] = await Promise.all([fetchAllCourses(), findMyCourses()]);

    setAllCourses(all);

    const enrolledIds = new Set(mine.map((c: any) => c._id));

    const map: Record<string, boolean> = {};
    all.forEach((c: any) => {
      map[c._id] = enrolledIds.has(c._id);
    });

    setEnrollmentMap(map);
    setShowEnrollModal(true);
  };

  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;

    if (enrollmentMap[courseId]) {
      await unenrollUserFromCourse(currentUser._id, courseId);
    } else {
      await enrollUserInCourse(currentUser._id, courseId);
    }

    setEnrollmentMap((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const onCloseEnrollModal = async () => {
    setShowEnrollModal(false);
    await fetchMyCourses(); // refresh ONLY my courses
  };

  // ---------------- COURSE ACTIONS ----------------

  const onAddNewCourse = async () => {
    await client.createCourse(course);
    await fetchMyCourses(); // ✅ always refetch
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    await fetchMyCourses(); // ✅ always refetch
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    await fetchMyCourses(); // ✅ always refetch
  };

  // ---------------- UI ----------------

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New Course
        <button className="btn btn-primary float-end" onClick={onAddNewCourse}>
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>

      <br />

      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <h2>My Courses ({courses.length})</h2>

        <button className="btn btn-primary" onClick={openEnrollModal}>
          Enroll / Unenroll
        </button>
      </div>

      <hr />

      {/* ENROLL MODAL */}
      <Modal
        show={showEnrollModal}
        onHide={onCloseEnrollModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Manage Enrollments</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className="list-group">
            {allCourses.map((c) => (
              <li
                key={c._id}
                className="list-group-item d-flex justify-content-between"
              >
                <div>
                  <div className="fw-bold">{c.name}</div>
                  <div className="text-muted small">{c.number}</div>
                </div>

                <button
                  className={`btn btn-sm ${
                    enrollmentMap[c._id] ? "btn-danger" : "btn-success"
                  }`}
                  onClick={() => onToggleEnrollment(c._id)}
                >
                  {enrollmentMap[c._id] ? "Unenroll" : "Enroll"}
                </button>
              </li>
            ))}
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseEnrollModal}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      {/* COURSES LIST */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c) => (
            <Col key={c._id} style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/courses/${c._id}/home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img src={c.image} height={160} />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>

                    <Card.Text style={{ height: "100px" }}>
                      {c.description}
                    </Card.Text>

                    <Button variant="primary">Go</Button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onDeleteCourse(c._id);
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCourse(c);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
