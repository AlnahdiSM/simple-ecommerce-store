import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";
import Products from "../db/products.json";

export default function ProductsList() {
  
  return (
    <Grid container spacing={4} justifyContent={"center"} className="z-50 relative">
      {Products.map((product)=> <ProductItem {...product} />)}
      
    </Grid>
  );
}
