import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ml-3" href="/">
        <h3 className="primary-text">
          <b>CEDACOURIER</b>
        </h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <h6>Home</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact-us">
              <h6>Contact Us</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/tracking">
              <h6>Tracking</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/tc">
              <h6>Terms & Conditions</h6>
            </a>
          </li>
        </ul>
        <div className="">
          <button className="btn primary-bg text-light px-4 mr-3 round">
            <a href="/login" className="text-light">
              Login
            </a>
          </button>
          <button className="btn primary-bg text-light px-4 mr-3 round">
            <a href="/register" className="text-light">
              Register
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
