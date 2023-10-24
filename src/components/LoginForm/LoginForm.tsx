"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { logIn } from "../../redux/auth/authOperations";
import styles from "./LoginForm.module.scss";
import { useDispatch } from "react-redux";

interface LoginData {
  username: string;
  password: string;
}

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

const registerSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z]).*$/,
      "Password must contain at least one lowercase letter"
    ),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = async (
    formValues: LoginData,
    { resetForm }: { resetForm: () => void }
  ) => {
    dispatch(logIn(formValues) as any);
    resetForm();
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: onHandleSubmit,
      validationSchema: registerSchema,
    });

  return (
    <form className={styles.loginFormStyled} onSubmit={handleSubmit}>
      <Input
        name="username"
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      {errors.username && touched.username ? (
        <span style={{ color: "red" }}>{errors.username}</span>
      ) : null}

      <Input
        name="password"
        type="password"
        placeholder="Create a password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password ? (
        <span style={{ color: "red" }}>{errors.password}</span>
      ) : null}

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
