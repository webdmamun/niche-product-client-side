import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user, admin } = useAuth();

  return (
    <div className="sticky-top p-4 bg-light">
      {admin ? (
        <div className="d-flex justify-content-between bg-transparent">
          <div className="d-flex flex-wrap">
            <Link className="text-dark text-decoration-none" to="/">
              <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Home
              </h5>
            </Link>

            <Link
              className="text-dark text-decoration-none"
              to="/manageallProducts"
            >
              <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Manage All Products
              </h5>
            </Link>

            <Link className="text-dark text-decoration-none" to="/manageorders">
              <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Manage Orders
              </h5>
            </Link>

            <Link className="text-dark text-decoration-none" to="/addproduct">
              <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Add Product
              </h5>
            </Link>

            <Link className="text-dark text-decoration-none" to="/makeadmin">
              <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Make Admin
              </h5>
            </Link>
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
        <div className="d-flex justify-content-between bg-transparent">
          <div className="d-flex flex-wrap">
            <Link className="text-dark text-decoration-none" to="/">
              <h4 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Home
              </h4>
            </Link>

            <Link className="text-dark text-decoration-none" to="/allProducts">
              <h4 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                Products
              </h4>
            </Link>

            {user?.email ? (
              <Link className="text-dark text-decoration-none" to="/myorders">
                <h4 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                  Dashboard
                </h4>
              </Link>
            ) : (
              ""
            )}

            <Link className="text-dark text-decoration-none" to="/about">
              <h4 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
                About Us
              </h4>
            </Link>
          </div>

          {user?.email ? (
            <h6>
              <button className="btn">Hi {user.displayName}</button>{" "}
              <button onClick={logOut} className="btn btn-secondary ">
                Log Out
              </button>
            </h6>
          ) : (
            <Link to="/login">
              <button className="btn btn-secondary ">Log In</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
