import Link from "next/link";

export default function Signup() {
  return (
    <div className="d-flex mt-5">
      <div id="wd-signup-screen" className="mb-2" style={{ width: "320px" }}>
        <h3 className="mb-3">Signup</h3>
        <input
          id="wd-username"
          placeholder="username"
          className="form-control mb-2"
        />

        <input
          id="wd-password"
          placeholder="password"
          type="password"
          className="form-control mb-3"
        />

        <Link
          id="wd-signup-btn"
          href="/account/profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signup
        </Link>

        <Link id="wd-signup-link" href="/account/signin">
          Signin
        </Link>
      </div>
    </div>
  );
}
