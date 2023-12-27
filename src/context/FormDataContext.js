// FormDataContext.js
import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <FormDataContext.Provider
      value={{ formData, handleNext, handleBack, activeStep, setFormData }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
