import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user, admin } = useAuth();

  return (
    <>
      <div className="p-4 sticky-top bg-light">
        <div className="container ">
          <nav class="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              Guiter Point
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {admin ? (
                  <div className="bg-transparent d-flex justify-content-between">
                    <div className="flex-wrap d-flex">
                      <li class="nav-item">
                        <NavLink
                          className="text-dark text-decoration-none nav-link"
                          to="/"
                        >
                          <h5
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Home
                          </h5>
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/manageallProducts"
                        >
                          <h5
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Manage All Products
                          </h5>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/manageorders"
                        >
                          <h5
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Manage Orders
                          </h5>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/addproduct"
                        >
                          <h5
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Add Product
                          </h5>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/makeadmin"
                        >
                          <h5
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Make Admin
                          </h5>
                        </Link>
                      </li>
                    </div>

                    {user?.email ? (
                      <h6>
                        <button className="btn">Hi {user.displayName}</button>{" "}
                        <button
                          onClick={logOut}
                          className="btn btn-outline-light text-dark"
                        >
                          Log Out
                        </button>
                      </h6>
                    ) : (
                      <Link to="/login">
                        <button className="btn btn-outline-light text-dark">
                          Log In
                        </button>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="bg-transparent d-flex justify-content-between">
                    <div className="flex-wrap d-flex">
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/"
                        >
                          <h4
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Home
                          </h4>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/allProducts"
                        >
                          <h4
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            Products
                          </h4>
                        </Link>
                      </li>

                      {user?.email ? (
                        <li class="nav-item">
                          <Link
                            className="text-dark text-decoration-none nav-link"
                            to="/myorders"
                          >
                            <h4
                              className="ms-3 me-5 "
                              style={{ cursor: "pointer" }}
                            >
                              Dashboard
                            </h4>
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}
                      <li class="nav-item">
                        <Link
                          className="text-dark text-decoration-none nav-link"
                          to="/about"
                        >
                          <h4
                            className="ms-3 me-5 "
                            style={{ cursor: "pointer" }}
                          >
                            About Us
                          </h4>
                        </Link>
                      </li>
                    </div>

                    <div>
                      {user?.email ? (
                        <h6>
                          <button className="btn">Hi {user.displayName}</button>{" "}
                          <button
                            onClick={logOut}
                            className="btn btn-secondary "
                          >
                            Log Out
                          </button>
                        </h6>
                      ) : (
                        <Link to="/login">
                          <button className="btn btn-secondary ">Log In</button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
