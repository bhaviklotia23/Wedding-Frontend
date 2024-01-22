import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { Tabs, Tab, Box } from "@mui/material";

const UserForm = ({ initialValues, handleSubmit }) => {
  const initialFormValues = initialValues || {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const [innerTab, setInnerTab] = useState(0);

  const handleInnerTabChange = (event, newValue) => {
    setInnerTab(newValue);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phoneNumber: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Field
            as={TextField}
            name="name"
            label="Name"
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            as={TextField}
            name="email"
            type="email"
            label="Email"
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            as={TextField}
            name="phoneNumber"
            label="Phone Number"
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!dirty || !isValid}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
