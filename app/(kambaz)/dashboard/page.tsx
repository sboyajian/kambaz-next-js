import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3424" className="wd-religion-and-politics">
            <Image
              src="/images/politicsreligion.jpg"
              width={200}
              height={150}
              alt="politicsreligion"
            />
            <div>
              <h5> POLS3424 Religion and Politics </h5>
              <p className="wd-religion-and-politics">Religion and Politics</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2500" className="wd-fundies-1">
            <Image
              src="/images/computerfundamentals.jpg"
              width={200}
              height={150}
              alt="fundies1"
            />
            <div>
              <h5> CS 2500 Fundies 1 </h5>
              <p className="wd-fundies-1">Fundies 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2501" className="wd-fundies-1-lab">
            <Image
              src="/images/computerfundamentals.jpg"
              width={200}
              height={150}
              alt="fundies1lab"
            />
            <div>
              <h5> CS 2500 Fundies 1 Lab </h5>
              <p className="wd-fundies-1-lab">Fundies 1 Lab</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1000" className="wd-calculus-1">
            <Image
              src="/images/calc.jpg"
              width={200}
              height={150}
              alt="calc1"
            />
            <div>
              <h5> MATH 1000 Calculus 1 </h5>
              <p className="wd-calculus-1">Calc 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2000" className="wd-calculus-2">
            <Image
              src="/images/calc.jpg"
              width={200}
              height={150}
              alt="calc2"
            />
            <div>
              <h5> MATH 2000 Calculus 2 </h5>
              <p className="wd-calculus-2">Calc 2</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3400" className="wd-international-relations">
            <Image src="/images/intl.jpg" width={200} height={150} alt="intl" />
            <div>
              <h5> POLS 3400 International Relations </h5>
              <p className="wd-international-relations">
                International Relations
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2600" className="wd-database-design">
            <Image
              src="/images/database.jpg"
              width={200}
              height={150}
              alt="database"
            />
            <div>
              <h5> CS 2600 Datebase Design </h5>
              <p className="wd-database-design">Database Design</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
