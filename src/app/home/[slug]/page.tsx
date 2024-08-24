"use client";
import { Product } from "@/db/products";
import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {

  const [products, setProducts] = useState<Product>();
  console.log("🚀 ~ Page ~ products:", params.slug)
  console.log("🚀 ~ Page ~ products:", products)

  
  useEffect(() => {
    // Fetch product from the backend
    async function getProduct() {
      try {
        const response = await fetch(`http://localhost:4000/api/${params.slug}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        console.log("🚀 ~ Page ~ Fetched product data:", data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    getProduct();
  }, [params.slug]);

  if (!products) {
    return <div>Loading...</div>; // Or a spinner
  }
  
  
  return (
    <Grid container className="p-4">
      <Grid item xs={6}>
        <Paper className="p-2 relative w-full h-full min-h-48">
          <Image
            alt=""
            src={require(`../../../../backend/Profiles/${products?.img1}`|| "")}
            fill
            className="object-cover"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} spacing={2} className="">
        <Paper className="p-2 w-full flex flex-col justify-between min-h-[80vh]">
          <div className=" p-4 space-y-4">
            <h3 className="font-bold text-lg">{products?.title} </h3>
            <p className="line-clamp-3">{products?.description}</p>
            <div className="flex w-full justify-end">
              <span className="text-lg font-bold">
                {products?.price}
              </span>
            </div>
          </div>
          <Grid container xs={12} justifyContent={"center"}>
            <Grid item xs={3} className="p-8">
              <Paper className="p-2 relative w-full h-full min-h-48">
                <Image
                  alt=""
                  src={require(`../../../../backend/Profiles/${products?.img1}`|| "")}
                  fill
                  className="object-cover"
                />
              </Paper>
            </Grid>
            <Grid item xs={3} className="p-8">
              <Paper className="p-2 relative w-full h-full min-h-48">
                <Image
                  alt=""
                  src={require(`../../../../backend/Profiles/${products?.img2}`|| "")}
                  fill
                  className="object-cover"
                />
              </Paper>
            </Grid>
            <Grid item xs={3} className="p-8">
              <Paper className="p-2 relative w-full h-full min-h-48">
                <Image
                  alt=""
                  src={require(`../../../../backend/Profiles/${products?.img3}`|| "")}
                  fill
                  className="object-cover"
                />
              </Paper>
            </Grid>
            <Grid item xs={3} className="p-8">
              <Paper className="p-2 relative w-full h-full min-h-48">
                <Image
                  alt=""
                  src={require(`../../../../backend/Profiles/${products?.img4}`|| "")}
                  fill
                  className="object-cover"
                />
              </Paper>
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
