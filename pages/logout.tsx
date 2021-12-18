import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { AuthLayout } from "../components/layouts";
import { NextPageWithLayout } from "./_app";

const Logout: NextPageWithLayout = () => {
  const { replace } = useRouter();
  const [, , remove] = useLocalStorage<string>("token");

  useEffect(() => {
    remove();
    const timer = setTimeout(() => {
      replace("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box width="100%" sx={{ textAlign: "center" }}>
      <Typography variant="h5" color="#2c8601" mb={4}>
        Successfully Logged Out
      </Typography>
      <Typography variant="h6">Redirecting...</Typography>
    </Box>
  );
};

Logout.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Logout;
