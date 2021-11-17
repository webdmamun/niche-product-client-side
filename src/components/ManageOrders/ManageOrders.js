import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";

const ManageOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://polar-eyrie-45293.herokuapp.com/myorders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleUpdateStatus = (id) => {
    fetch(`https://polar-eyrie-45293.herokuapp.com/updateorderstatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => res.json());
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <table className="table table-hover table-secondary text-start">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Update Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myorder, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>

                <td>
                  {myorder.name}{" "}
                  {myorder.quantity > 1 ? (
                    <span className="bg-secondary rounded-circle ps-2 pe-2 pt-1 pb-1">
                      {myorder.quantity}
                    </span>
                  ) : (
                    ""
                  )}
                </td>
                <td>{myorder.userEmail}</td>
                <td>{myorder.status}</td>
                <td>
                  <button
                    onClick={() => handleUpdateStatus(myorder._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
