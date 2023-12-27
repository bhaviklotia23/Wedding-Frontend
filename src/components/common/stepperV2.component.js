import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Button } from "@material-ui/core";
// import SwipeableViews from "react-swipeable-views";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./steps/Step1.js";
import Step2 from "./steps/Step2.js";
import Step3 from "./steps/Step3/Step3.js";
import Step4 from "./steps/Step4.js";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";
const steps = [Step1, Step2, Step3, Step4];

export const OrderForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handlePrev = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, steps.length - 1)),
  ];

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag;

    if (!isLastStep()) {
      setSubmitting(false);
      handleNext();
      return;
    }

    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );
  const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, touched, values }) => (
        <>
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
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepLabel>{steps[index].label}</StepLabel>
                    </Step>
                  ))}
                </CustomStepper>
                {/* <SwipeableViews index={activeStep}>
                  {steps.map((step, index) => {
                    const Component = steps[index];
                    return <Component key={index} />;
                  })}
                </SwipeableViews> */}
                <Button
                  disabled={activeStep === 0 || isSubmitting}
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button disabled={isSubmitting} type="submit">
                  {isLastStep() ? "Submit" : "Next"}
                </Button>
              </Form>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(touched, null, 2)}</pre> */}
            </DemoPaper>
          </div>
        </>
      )}
    </Formik>
  );
};
