import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log("Form values:", values);
    dispatch(login(values));
    options.resetForm();
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) return <Navigate to="/contacts" />;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" className={s.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" className={s.error} />

        <button type="submit">Login</button>

        {error && <p className={s.error}>{error}</p>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
