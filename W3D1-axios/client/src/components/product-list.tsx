import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Product } from "../types/products";
import { get } from "http";
import { deleteProductRequest } from "../services/product.service";
interface Props {
  products: Product[];
  deleteProduct: (id: number) => void;
}
export default function ProductList(props: Props) {
  const { products, deleteProduct } = props;
  const deleteHandler = async (id: number) => {
    const response = await deleteProductRequest(id);
    if (response.status == 200) deleteProduct(id);
  };
  return (
    <div>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <th scope="row">{prod.id}</th>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td>{prod.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (prod.id) {
                      deleteHandler(prod.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
