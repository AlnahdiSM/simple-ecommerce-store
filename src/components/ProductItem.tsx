import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import imgUrl from "../../public/img/background.jpg";
export default function ProductItem() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className="min-h-80 p-3">
        <div className="relative h-52 rounded-md overflow-clip  w-full ">
          <Image alt="" src={imgUrl} fill className="object-cover " />
        </div>
        <div className=" p-4 space-y-4">
          <h3 className="font-bold text-lg">ساعة ذكية X100</h3>
          <p className="line-clamp-3">
            ساعة ذكية متعددة الوظائف بتصميم أنيق وعصري، مثالية لتتبع نشاطك
            اليومي وتحسين لياقتك البدنية. توفر لك تنبيهات فورية، وتتبع النوم،
            وقياس معدل ضربات القلب، مع بطارية تدوم لأيام طويلة.
          </p>
          <div className="flex w-full justify-end">
            <span className="text-lg font-bold">500 ر.س</span>
          </div>
        </div>
        <Button className="w-full bg-lime-600 py-2 text-white">إشتري الان</Button>
      </Paper>
    </Grid>
  );
}
