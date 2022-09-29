import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="#" style={{ color: "white" }}>
              Eagle-News
            </Link>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="#"
                    style={{ color: "white" }}
                  >
                    <strike>Home</strike>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{ color: "white" }}>
                    <strike>Features</strike>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{ color: "white" }}>
                    <strike>Plans</strike>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container ">
          <h2 className="my-4 text-center">What You Want To Be Read ? </h2>
          <div className=" d-flex justify-content-between">
            <button type="button" className="btn btn-outline-danger">
              <Link to="/general" className="nav-link">
                General
              </Link>
            </button>
            <button type="button" className="btn btn-outline-danger">
              <Link to="/technology" className="nav-link ">
                Technology
              </Link>
            </button>
            <button type="button" className="btn btn-outline-danger">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </button>
          </div>
          <div className=" d-flex justify-content-between my-3 ">
            <button type="button" className="btn btn-outline-danger">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </button>
            <button type="button" className="btn btn-outline-danger">
              <Link to="/health" className="nav-link">
                Health
              </Link>
            </button>
            <button type="button" className="btn btn-outline-danger">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
