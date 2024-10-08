import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ProductsType } from "@/types";
import Link from "next/link";
import { Product } from "../db/products";

export default function ProductItem({ title ,description,price ,_id,cardCover}: Product) {
  console.log(cardCover);
  
  return (

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className="min-h-80 p-3">
        <div className="relative h-52 rounded-md overflow-clip  w-full ">
          <Image alt="yugu" src={require(`../../backend/Profiles/${cardCover}`)} fill className="object-cover " />
        </div>
        <div className=" p-4 space-y-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="line-clamp-3">
            {description}
          </p>
          <div className="flex w-full justify-end">
            <span className="text-lg font-bold">${price}</span>
          </div>
        </div>
        <Link href={`/home/${_id}`}>
        <Button  className="w-full bg-lime-600 py-2 text-white">
          إشتري الان
        </Button>
        </Link>
      </Paper>
    </Grid>
  );
}
