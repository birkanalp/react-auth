import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { MyInput } from "../components/inputs";
import { AuthLayout } from "../components/layouts";
import { ForgotPasswordDto } from "../dto/auth.dto";
import { NextPageWithLayout } from "./_app";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword: NextPageWithLayout = () => {
  const formik = useFormik<ForgotPasswordDto>({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: ForgotPasswordDto) => {
    // const res = await login(values).unwrap();
    // setValue(res.access_token);
    console.log("ForgotPassword", values);
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
        autoFocus
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        // loading={isLoading}
      >
        Send Email
      </LoadingButton>
    </Box>
  );
};

ForgotPassword.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default ForgotPassword;
