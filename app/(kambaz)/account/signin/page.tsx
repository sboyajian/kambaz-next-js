import Link from "next/link";

export default function Signin() {
  return (
    <div className="d-flex mt-5">
      <div id="wd-signin-screen" className="mb-2" style={{ width: "320px" }}>
        <h3 className="mb-3">Signin</h3>

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
          id="wd-signin-btn"
          href="/dashboard"
          className="btn btn-primary w-100 mb-2"
        >
          Signin
        </Link>

        <Link id="wd-signup-link" href="/account/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
