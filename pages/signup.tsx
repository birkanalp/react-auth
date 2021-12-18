import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { MyInput } from "../components/inputs";
import { AuthLayout } from "../components/layouts";
import { SignupDto } from "../dto/auth.dto";
import { NextPageWithLayout } from "./_app";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Signup: NextPageWithLayout = () => {
  const formik = useFormik<SignupDto>({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: SignupDto) => {
    // const res = await login(values).unwrap();
    // setValue(res.access_token);
    console.log("Signup", values);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      width="100%"
    >
      <Grid container gap={3}>
        <Grid item xs>
          <MyInput
            formik={formik}
            name="name"
            required
            fullWidth
            label="First name"
            autoFocus
          />
        </Grid>
        <Grid item xs>
          <MyInput
            formik={formik}
            name="lastname"
            required
            fullWidth
            label="Last name"
          />
        </Grid>
      </Grid>
      <MyInput formik={formik} name="email" required fullWidth label="Email" />
      <MyInput
        formik={formik}
        name="password"
        required
        fullWidth
        label="Password"
        autoComplete="new-password"
        type="password"
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        // loading={isLoading}
      >
        Sign Up
      </LoadingButton>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item>
          <Typography fontSize={14} color="text.secondary">
            <Link href="/login">Don you have an account?</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Signup.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Signup;
