"use client"
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Product } from "../db/products";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch("http://localhost:4000/api")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array to run the fetch on component mount

  return (
    <Grid
      container
      spacing={4}
      justifyContent={"center"}
      className="z-50 relative"
    >
      {products.map((product) => (
        <ProductItem  key={product._id} {...product} />
      ))}
    </Grid>
  );
}
