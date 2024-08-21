import SignIn from "@/components/SignIn";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Grid container justifyContent={"center"} className="h-screen flex  items-center">
      <Grid item xs={12} className="flex justify-center"   >
        <SignIn/>
      </Grid>
    </Grid>
  );
}
