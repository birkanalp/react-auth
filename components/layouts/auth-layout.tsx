import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";

type Props = {};

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ width: 225, height: 50, position: "relative", mb: 8 }}
        component="div"
      >
        <Image src="/images/logo.png" layout="fill" priority />
      </Box>
      {children}
    </Container>
  );
};
