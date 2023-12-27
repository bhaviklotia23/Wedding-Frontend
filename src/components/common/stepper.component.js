import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, Paper, Typography } from "@mui/material";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3/Step3";
import styled from "@emotion/styled";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import { Form, Formik } from "formik";
// import SwipeableViews from "react-swipeable-views";

const step = [Step1, Step2, Step3, Step4, Step5, Step6];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const CustomStepper = styled(Stepper)(({ theme }) => ({
    "& .MuiStepIcon-root.Mui-active": {
      color: theme.status.warning,
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: theme.status.warning,
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    "& .MuiButtonBase-root": {
      color: theme.status.warning,
    },
  }));

  const isLastStep = () => {
    return activeStep === step.length - 1;
  };

  const handlePrev = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, step.length - 1)),
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

  const initialValues = step.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );
  const ActiveStep = step[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  const DemoPaper = styled(Paper)(({ theme }) => ({
    // margin: "5% 10%", // Adjust margins for responsiveness
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    margin: `${theme.breakpoints.down("xs") ? "5% 10%" : ""}${theme.breakpoints.between("sm", "md") ? "75px" : ""}`
  }));

  return (
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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, touched, values }) => (
              <Form>
                <Box sx={{ width: "100%" }}>
                  <CustomStepper activeStep={activeStep} alternativeLabel>
                    {step.map((steps, index) => (
                      <Step key={index}>
                        <StepLabel>{step[index].label}</StepLabel>
                      </Step>
                    ))}
                  </CustomStepper>
                  <>
                    <Box
                      component="form"
                      sx={{
                        marginTop: "30px",
                      }}
                      autoComplete="off"
                    >
                      {/* <SwipeableViews index={activeStep}>
                        {step.map((steps, index) => {
                          const Component = step[index];
                          return <Component key={index} />;
                        })}
                      </SwipeableViews> */}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                      }}
                    >
                      <Button
                        disabled={activeStep === 0 || isSubmitting}
                        onClick={handlePrev}
                      >
                        Previous
                      </Button>
                      <CustomButton disabled={isSubmitting} type="submit">
                        {isLastStep() ? "Submit" : "Next"}
                      </CustomButton>
                    </Box>
                  </>
                </Box>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(touched, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </DemoPaper>
      </div>
    </>
  );
}
