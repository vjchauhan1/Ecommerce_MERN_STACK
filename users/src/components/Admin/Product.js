import React, { useState, useEffect } from "react";
import AdminMenu from "../../layouts/AdminMenu";
import Layout from "../../layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/ecommerce/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
  <div className="row">
    <div className="col-md-3">
      <AdminMenu />
    </div>
    <div className="col-md-9">
      <h1 className="text-center">All Products List</h1>
      <div className="row">
        {products?.map((p) => (
          <div className="col-md-3 mb-4" key={p._id}>
            <Link to={`/dashboard/admin/product/${p.slug}`} className="product-link">
              <div className="card">
                <img
                  src={`${process.env.REACT_APP_API}/ecommerce/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</Layout>

  );
};

export default Products;