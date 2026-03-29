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

  const fetchMyCourses = async () => {
    try {
      const fetchedCourses = await client.findMyCourses();
      dispatch(setCourses(fetchedCourses));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyCourses();
  }, [currentUser]);

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
    setEnrollmentMap((prev) => ({ ...prev, [courseId]: !prev[courseId] }));
  };

  const onCloseEnrollModal = async () => {
    setShowEnrollModal(false);
    await fetchMyCourses();
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(courses.map((c) => (c._id === course._id ? course : c))),
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse}
          id="wd-update-course-click"
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
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <button className="btn btn-primary" onClick={openEnrollModal}>
          Enroll / Unenroll
        </button>
      </div>
      <hr />
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
                className="list-group-item d-flex justify-content-between align-items-center"
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
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/courses/${c._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src={c.image}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                    <>
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
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                    </>
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
