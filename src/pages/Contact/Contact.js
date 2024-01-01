import React from "react";
import { useFormik } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { addContacts } from "../../api/contact/contact";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(255, 87, 34) !important",
          },
        },
      },
    },
  },
});

const Contact = () => {
  const navigate = useNavigate("");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await addContacts(values);
        console.log("response", response)
        if (response.success) {
          resetForm();
          navigate("/");
        }
      } catch (error) {
        console.error("Submit error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <ErrorMessage name="name" />

        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <ErrorMessage name="email" />

        <Field
          as="textarea"
          type="text"
          id="description"
          name="description"
          placeholder="Message"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <ErrorMessage name="description" />

        <ThemeProvider theme={theme}>
          <Button
            sx={{
              marginTop: "10px",
              backgroundColor: "rgb(255, 87, 34)",
            }}
            variant="contained"
            type="submit"
            size="medium"
          >
            Submit
          </Button>
        </ThemeProvider>
      </Form>
    </div>
  );
};

export default Contact;
