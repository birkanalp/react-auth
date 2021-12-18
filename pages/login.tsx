import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLocalStorage } from "react-use";
import * as yup from "yup";
import { MyInput } from "../components/inputs";
import { AuthLayout } from "../components/layouts";
import { LoginDto } from "../dto/auth.dto";
import { NextPageWithLayout } from "./_app";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Login: NextPageWithLayout = () => {
  const { replace } = useRouter();
  const [, setToken] = useLocalStorage<string>("token");
  const formik = useFormik<LoginDto>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: LoginDto) => {
    // const res = await login(values).unwrap();
    setToken("Example Token");
    console.log("Login", values);
    replace("/app/home");
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      width="100%"
    >
      <MyInput
        formik={formik}
        name="email"
        required
        fullWidth
        label="Email"
        autoComplete="email"
        autoFocus
      />
      <MyInput
        formik={formik}
        name="password"
        required
        fullWidth
        label="Password"
        autoComplete="current-password"
        type="password"
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        // loading={isLoading}
      >
        Sign In
      </LoadingButton>
      <Grid container>
        <Grid item xs>
          <Typography fontSize={14} color="text.secondary">
            <Link href="/forgot-password">Forgot password?</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={14} color="text.secondary">
            <Link href="/signup">Don't have an account?</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Login;
