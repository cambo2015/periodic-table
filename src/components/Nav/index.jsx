import React from "react";
const Navbar = () => {

   
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <h5 className="text-muted h4">The Periodic Table App</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <a className="text-decoration-none" href="#periodic-table">
                Periodic Table
              </a>
            </li>
            <li className="list-group-item">
              <a className="text-decoration-none" href="#credits">
                Credits
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
