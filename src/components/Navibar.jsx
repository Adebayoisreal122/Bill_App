import React from "react";
import Sidebar from "./Sidebar";

function Navibar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow  bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              Enable
            </button>

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto">
              <button className="btn btn-outline-success" type="submit">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    <Sidebar/>
    </>
  );
}

export default Navibar;
