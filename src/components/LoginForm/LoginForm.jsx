import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import {
  selectIsLoggedIn,
  selectUser,
  selectError,
} from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  if (isLoggedIn) {
    navigate("/contacts");
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage
          name="password"
          component="div"
          className={styles.error}
        />

        <button type="submit">Login</button>

        {error && <p className={styles.error}>{error}</p>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
