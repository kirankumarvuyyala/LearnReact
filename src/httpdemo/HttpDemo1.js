import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HttpDemo1() {
  const [products, setProducts] = useState([]);
  let token=window.localStorage.getItem('authorized');
	let navigateBack=useNavigate();

  const fetchProducts = async function () {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJSON = await products.json();
    setProducts(productsJSON);
  };

  useEffect(() => {
    if(!token)
    {
      navigateBack("/Login");
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-center">Fetch Products</h1>
      <div className="container">
        <div className="row">
          {products.map((product, ind) => {
            return (
              <div className="col-sm-3 card" key={ind}>
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "150px" }}
                  alt=""
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.title}</p>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">Ratings: {product.rating.rate}</p>
                  <Link to={`/HttpDemo1/${ind}`}> BUY NOW</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}