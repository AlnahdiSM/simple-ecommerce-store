import { Grid } from "@mui/material";
import React from "react";
import imgUrl1 from "../../../public/img/yellow-shopping-cart-blue-background_343170-6381.jpg"
import imgUrl2 from "../../../public/img/5329549.jpg"
import Image from "next/image";
import ProductsList from "@/components/ProductsList";
export default function page() {
  return (
    <Grid container  className=" p-6 px-10 gap-y-2">
      <Grid container   justifyContent={"center"} justifyItems={"center"} className="bg-lime-400 h-[500px] relative overflow-clip rounded-3xl" >
        <Image alt="" src={imgUrl1} fill className="object-cover z-50 opacity-85"/>
      </Grid>
      <Grid item xs={12} className="bg-lime-200 p-6 rounded-xl relative overflow-clip ">
        <Image alt="" src={imgUrl2} fill className="object-cover -z-0  opacity-10"/>
        <ProductsList />
      </Grid>
      <Grid item xs={12} className="bg-red-600">3</Grid>
    </Grid>
  );
}
