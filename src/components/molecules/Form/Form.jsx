import React from "react";
import { Formik } from "formik";

import Input from "../../atoms/Input/Input";

import "./Form.scss";

export default function Form() {
  return (
    <Formik
      initialValues={{ email: "Email", firstName: "", lastName: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
          />
        </form>
      )}
    </Formik>
  );
}
