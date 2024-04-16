import React, { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../types/products";
import axios from "../axios";
import { title } from "process";
import { postProduct } from "../services/product.service";
interface Props {
  addProducts: (newProduct: Product) => void;
}
export default function AddProduct(props: Props) {
  const [submitData, setSubmitData] = useState<{
    title: string;
    price: number;
    description: string;
  }>({ title: "", price: 0, description: "" });
  const { addProducts } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSubmitData({ ...submitData, [name]: value });
  };
  const onDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitData({ ...submitData, description: e.currentTarget.value });
  };
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await postProduct(submitData);
    if (response.status === 201) {
      addProducts(response.data);
      setSubmitData({ title: "", price: 0, description: "" });
    }
  };
  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            value={submitData.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={submitData.price}
            name="price"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={submitData.description}
            rows={3}
            onChange={onDescriptionHandler}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
