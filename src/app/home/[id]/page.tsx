"use client";
import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import imgUrl1 from "../../../../public/img/5329549.jpg";
import { useParams } from "next/navigation";
import Products from "../../../db/products.json";

export default function page() {
  const { id } = useParams();
  const selectedProduct = Products.find(
    (product) => product.id.toString() == id
  );
  const imgUrl1 = selectedProduct?.image1;
  return (
    <Grid container className="">
      <Grid item xs={6}>
        <Paper className="p-2 w-full flex flex-col justify-between min-h-[80vh]"></Paper>
      </Grid>
      <Grid item xs={12} md={6} spacing={2} className="">
        <Paper className="p-2 w-full flex flex-col justify-between min-h-[80vh]">
          <div className=" p-4 space-y-4">
            <h3 className="font-bold text-lg">{selectedProduct?.title} </h3>
            <p className="line-clamp-3">{selectedProduct?.description}</p>
            <div className="flex w-full justify-end">
              <span className="text-lg font-bold">
                {selectedProduct?.price}
              </span>
            </div>
          </div>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={3}>
              <Paper className="p-2 relative w-full h-full min-h-48">
                <Image
                  alt=""
                  src={selectedProduct?.image1 ?? ""}
                  fill
                  className="object-cover"
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="p-2 w-full h-full min-h-48"></Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className="p-2 w-full h-full min-h-48"></Paper>
            </Grid>
          </Grid>
          <Button className="w-full bg-lime-600 py-2 text-white">
            أضف للسلة
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
