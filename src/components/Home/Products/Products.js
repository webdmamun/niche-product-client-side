import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-eyrie-45293.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div style={{ backgroundColor: "#E3E6E8", paddingTop: "10px" }}>
      <h1>Freature Products</h1>
      <div className="container mt-4 mb-5">
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-sm-4 mb-5 border-bottom">
              <div className="card border-white">
                <img
                  src={product.image}
                  style={{ width: "100px", marginLeft: "40%" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <u>{product.name}</u>
                  </h5>
                  <p className="card-text">
                    {product.description.slice(0, 50)}...
                  </p>
                  <h5 className="mb-3">From ${product.price}</h5>
                  <Link to={`/purchase/${product._id}`}>
                    <button className="btn btn-secondary">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
