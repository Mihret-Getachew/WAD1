import React, { useState, useEffect } from "react";
import ProductList from "./components/product-list";
import AddProduct from "./components/add-product";
import { Product } from "./types/products";
import axios from "./axios";
import { getProducts } from "./services/product.service";

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await getProducts();
      setProduct(response.data);
    }
    getData();
  }, []);
  const addProducts = (newProduct: Product) => {
    setProduct([...product, newProduct]);
  };
  const deleteProduct = (id: number) => {
    setProduct(product.filter((pro) => pro.id !== id));
  };
  return (
    <div className="container">
      <ProductList products={product} deleteProduct={deleteProduct} />
      <AddProduct addProducts={addProducts} />
    </div>
  );
}

export default App;
