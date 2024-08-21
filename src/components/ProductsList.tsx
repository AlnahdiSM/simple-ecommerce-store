import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  return (
    <Grid container spacing={4} justifyContent={"center"} className="z-50 relative">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Grid>
  );
}
