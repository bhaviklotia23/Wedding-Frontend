import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Stepper, Step, StepLabel, Button, Box, Paper } from "@mui/material";
import Step1 from "./steps/Step1"; // Step1 component
import Step2 from "./steps/Step2"; // Step2 component
import Step3 from "./steps/Step3/Step3"
import styled from "@emotion/styled";
import * as Yup from "yup";

const steps = ["Step 1", "Step 2", "Step 3"];
console.log("steps",steps)

const validationSchema = [
  Yup.object({
    groomFirstName: Yup.string().required("Groom's First name is required"),
    groomLastName: Yup.string().required("Groom's Last name is required"),
    groomPhoneNumber: Yup.string().required("Groom's Phone Number is required"),
    brideFirstName: Yup.string().required("Bride's First name is required"),
    brideLastName: Yup.string().required("Bride's Last name is required"),
    bridePhoneNumber: Yup.string().required("Bride's Phone Number is required"),
  }),
  Yup.object({
    story: Yup.string().required("Story is required"),
  }),
  Yup.object({
    foodOffered: Yup.string().required("foodOffered is required"),
    alcohol: Yup.string().required("alcohol is required"),
    address1: Yup.string().required("address1 is required"),
    address2: Yup.string().required("address2 is required"),
    venue: Yup.string().required("venue is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    zipCode: Yup.string().required("zipCode is required"),
    event: Yup.string().required("event is required"),
    dressCode: Yup.string().required("dressCode is required"),
    music: Yup.string().required("music is required"),
    descriptionCode: Yup.string().required("descriptionCode is required"),
  }),
 
//   Yup.object({
//     age: Yup.number().required("Age is required").positive().integer(),
//   }),
];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const initialValues = {
    groomFirstName: "",
    groomLastName: "",
    groomPhoneNumber: "",
    brideFirstName: "",
    brideLastName: "",
    bridePhoneNumber: "",
    story: "",
    url: "",
    foodOffered:"",
    alcohol: false,
    weddingDay:"",
    address1:"",
    address2:"",
    venue:"",
    state:"",
    city:"",
    zipCode:"",
    event:"",
    dressCode:"",
    music:"",
    descriptionCode:""
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values) => {
    console.log(values, "bhavik");
    // Handle final form submission here
    console.log(values);
  };

  const DemoPaper = styled(Paper)(({ theme }) => ({
    margin: 75,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  const CustomStepper = styled(Stepper)(({ theme }) => ({
    "& .MuiStepIcon-root.Mui-active": {
      color: theme.status.warning, // Change the color of the icon here
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: theme.status.warning, // Change the color of the icon here
    },
  }));

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return (
          <div><Step3/></div>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={activeStep === steps.length - 1 ? handleSubmit : handleNext}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <div
          style={{
            minHeight: "calc(100vh - 40vh)",
            overflow: "hidden",
            width: "100%",
            marginTop: 50,
          }}
        >
          <DemoPaper elevation={3}>
            <Form>
              <CustomStepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </CustomStepper>

              {getStepContent(activeStep)}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button type="submit">
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </Form>
          </DemoPaper>
        </div>
      )}
    </Formik>
  );
};

export default StepperForm;
