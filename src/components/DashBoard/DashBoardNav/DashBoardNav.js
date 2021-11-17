import React from "react";
import { Link } from "react-router-dom";

const DashBoardNav = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="d-flex justify-content-between p-2 rounded ms-5 me-5 bg-dark">
        <div className="d-flex flex-wrap justify-content-center">
          <Link className="text-white text-decoration-none" to="/myOrders">
            <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
              My Orders
            </h5>
          </Link>
          <Link className="text-white text-decoration-none" to="/review">
            <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
              Review
            </h5>
          </Link>
          <Link className="text-white text-decoration-none" to="/pay">
            <h5 className="ms-3 me-5 " style={{ cursor: "pointer" }}>
              Pay
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
