// FormDataContext.js
import React, { createContext, useContext, useReducer } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const initialState = {
  // Initial form data
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  password: "",
  confirmPassword: "",
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string(),
  city: Yup.string(),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }, initialState);

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch({ type: "update", payload: values });
      }}
    >
      {(formikProps) => (
        <FormDataContext.Provider value={{ formData, formikProps }}>
          {children}
        </FormDataContext.Provider>
      )}
    </Formik>
  );
};
