import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DashBoard from "../DashBoard/DashBoard";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://polar-eyrie-45293.herokuapp.com/myorders")
      .then((res) => res.json())
      .then((data) =>
        setMyOrders(data.filter((order) => order.userName === user.displayName))
      );
  }, [user.displayName]);

  const handleOrderDelete = (id) => {
    const confirm = window.confirm("Are you sure, You want to cancle order?");
    if (confirm) {
      fetch(
        `https://polar-eyrie-45293.herokuapp.com/myorders/deleteorder/${id}`,
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Cancled");
            const remainOrder = myOrders.filter(
              (myorder) => myorder._id !== id
            );
            setMyOrders(remainOrder);
          }
        });
    }
  };

  return (
    <div>
      <DashBoard></DashBoard>
      <h2 className="mt-4 mb-5">My orders</h2>
      <div className="container">
        <table className="table table-hover table-secondary text-start">
          <thead className="">
            <tr>
              <th scope="col">#</th>

              <th scope="col">Product</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Delete Order</th>
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
                    onClick={() => handleOrderDelete(myorder._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
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

export default MyOrders;
