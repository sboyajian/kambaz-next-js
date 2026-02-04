import Link from "next/link";

export default function Profile() {
  return (
    <div className="d-flex mt-5">
      <div id="wd-profile-screen" className="mb-2" style={{ width: "320px" }}>
        <h3 className="mb-3">Profile</h3>
        <input
          id="wd-username"
          placeholder="alice"
          className="form-control mb-2"
        />

        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          className="form-control mb-3"
        />

        <input
          id="wd-firstname"
          placeholder="Alice"
          className="form-control mb-2"
        />

        <input
          id="wd-lastname"
          placeholder="Wonderland"
          className="form-control mb-2"
        />

        <input
          id="wd-date"
          placeholder="2000-01-01"
          type="date"
          className="form-control mb-2"
        />

        <input
          id="wd-email"
          placeholder="alice@wonderland.com"
          className="form-control mb-2"
        />

        <input id="wd-user" placeholder="User" className="form-control mb-2" />

        <Link
          id="wd-profile-btn"
          href="/account/profile"
          className="btn btn-tertiary w-100 mb-2"
        >
          Signout
        </Link>

        <Link id="wd-signup-link" href="/account/signin">
          Signin
        </Link>
      </div>
    </div>
  );
}
