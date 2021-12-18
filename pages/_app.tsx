import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { RouteGuard } from "../guards/auth.guard";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#007dc1",
    },
    secondary: {
      main: "#d87617",
    },
    success: {
      main: "#2c8601",
    },
    error: {
      main: "#F44C22",
    },
  },
};

const theme = createTheme(themeOptions);

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteGuard>{getLayout(<Component {...pageProps} />)}</RouteGuard>
    </ThemeProvider>
  );
}

export default MyApp;
