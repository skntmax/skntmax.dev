import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home">Homepage</Link>
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
            <Link className="nav-link" to="/add-paid-files">
              add paid files 
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/access-rights">
              Give Content Access 
            </Link>
          </li>

          
          <li class="nav-item">
            <Link className="nav-link" to="/quiz-section">
              Quiz section  
            </Link>
          </li>


        </ul>
        <form class="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
}

export default AdminNav;
