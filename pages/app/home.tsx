import { Box, Typography } from "@mui/material";
import React from "react";
import { AppLayout } from "../../components/layouts";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {
  return (
    <Box width="100%" sx={{ textAlign: "center" }}>
      <Typography variant="h5">Successfully Logged In</Typography>
    </Box>
  );
};

Home.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default Home;
