import { Grid } from "@mui/material";
import React from "react";
import imgUrl1 from "../../../public/img/yellow-shopping-cart-blue-background_343170-6381.jpg";
import imgUrl2 from "../../../public/img/5329549.jpg";
import Image from "next/image";
import ProductsList from "@/components/ProductsList";
import NavBar from "@/components/NavBar";
export default function page() {
  return (
    <>
    <NavBar/>
      <Grid container className=" p-6 px-10 gap-y-2">
        <Grid
          container
          justifyContent={"center"}
          justifyItems={"center"}
          className="bg-lime-400 h-[500px] relative overflow-clip rounded-3xl"
        >
          <Image
            alt=""
            src={imgUrl1}
            fill
            className="object-cover z-50 opacity-85"
          />
        </Grid>
        <Grid
          item
          xs={12}
          className="bg-lime-200 p-6 rounded-xl relative overflow-clip "
        >
          <Image
            alt=""
            src={imgUrl2}
            fill
            className="object-cover -z-0  opacity-10"
          />
          <ProductsList />
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          justifyItems={"center"}
          className="bg-lime-400 h-[200px] relative overflow-clip  rounded-2xl"
        >
          <Image
            alt=""
            src={imgUrl1}
            fill
            className="object-cover object-left-bottom z-50 opacity-85"
          />
        </Grid>
      </Grid>
    </>
  );
}
