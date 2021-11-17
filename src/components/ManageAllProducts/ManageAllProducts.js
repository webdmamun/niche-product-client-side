import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-eyrie-45293.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("You want to delete it?");

    if (proceed) {
      fetch(`https://polar-eyrie-45293.herokuapp.com/product/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "apllication/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>All Products</h1>
      <div className="container mt-4 mb-5">
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-sm-4 mb-5 border-bottom">
              <div className="card border-white">
                <img
                  className="img-fluid rounded-top"
                  src={product.image}
                  style={{ width: "100px", marginLeft: "40%" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <u>{product.name}</u>
                  </h5>
                  <p className="card-text">
                    {product.description.slice(0, 120)}...
                  </p>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageAllProducts;
