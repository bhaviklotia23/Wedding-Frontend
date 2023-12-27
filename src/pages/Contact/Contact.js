import React from "react";
import { useFormik } from "formik";
import { Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
        console.log("response", response);
        if (response.success) {
          resetForm();
          navigate("/");
        }
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div
      style={{
        minHeight: "calc(100vh - 40vh)",
        overflow: "hidden",
        width: "100%",
        marginTop: "110px",
      }}
    >
      <div class="contact-top">
        <div class="container">
          <div class="contact-grids">
            <div class="col-md-7 contact-form">
              <Form onSubmit={formik.handleSubmit}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeHolder="Name"
                  className="name-input"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{
                      marginTop: "5px",
                      color: "red",
                      fontSize: "15px",
                    }}
                  />
                )}
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeHolder="Email"
                  className="email-input"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  style={{ marginLeft: "12px" }}
                />
                {formik.errors.email && (
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{
                      marginTop: "5px",
                      color: "red",
                      fontSize: "15px",
                    }}
                  />
                
                )}

                <Field
                  as="textarea"
                  type="text"
                  id="description"
                  name="description"
                  placeHolder="Message"
                  className="description-input"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.errors.description ? (
                  <ErrorMessage
                    name="description"
                    component="div"
                    style={{
                      marginTop: "5px",
                      color: "red",
                      fontSize: "15px",
                    }}
                  />
                ) : (
                  <></>
                )}

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
            <div class="col-md-4 contact-right">
              <div class="contact-text">
                <h4>Working Hours :</h4>
                <p> Monday – Saturday 5:00 a.m – 9:00 p.m </p>
                <p> Sunday 10 a.m – 4 p.m </p>
                <p>
                  <span class="glyphicon glyphicon-earphone"></span> +11 999
                  8888 7777{" "}
                </p>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
