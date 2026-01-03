import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "Ian Mwambuki", email: "", password: "" };
  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" />

        <Field name="email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
