import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & { formik: any; name: string };

export const MyInput = ({ formik, name, ...props }: Props): JSX.Element => {
  return (
    <TextField
      margin="normal"
      id={name}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
  );
};
