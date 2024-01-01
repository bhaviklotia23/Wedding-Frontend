import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, styled } from "@mui/material";
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

// const StyledField = styled(TextField)`
//   /* Default style */
//   margin-left: 0;

//   /* Media query for medium (md) devices */
//   @media (min-width: 768px) {
//     margin-left: 12px;
//   }
// `;

const Contact = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    description: Yup.string().required("Description is Required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log(values, "values");
    try {
      const response = await addContacts(values);
      console.log("response", response);
      if (response.success) {
        resetForm();
        navigate("/");
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 40vh)",
        overflow: "hidden",
        width: "100%",
        marginTop: "110px",
      }}
    >
      <div className="contact-top">
        <div className="container">
          <div className="contact-grids">
            {/* <div className="col-md-7 contact-form"> */}
            <Formik
              initialValues={{
                name: "",
                email: "",
                description: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    placeholder="Name"
                  />

                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Message"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && Boolean(errors.description)}
                    helperText={touched.description && errors.description}
                  />

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
              )}
            </Formik>
            {/* </div> */}
            <div className="col-md-4 contact-right">
              <div className="contact-text">
                <h4>Working Hours :</h4>
                <p> Monday – Saturday 5:00 a.m – 9:00 p.m </p>
                <p> Sunday 10 a.m – 4 p.m </p>
                <p>
                  <span className="glyphicon glyphicon-earphone"></span> +11 999
                  8888 7777{" "}
                </p>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
