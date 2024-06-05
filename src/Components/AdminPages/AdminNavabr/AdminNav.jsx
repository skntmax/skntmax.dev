import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">Homepage</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/add-content">
              Add content <span class="sr-only">(Q/A)</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/add-paid-files">
              add paid files 
            </a>
          </li>

        </ul>
        <form class="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
}

export default AdminNav;
