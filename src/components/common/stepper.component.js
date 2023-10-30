import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, Typography } from "@mui/material";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import styled from "@emotion/styled";

const steps = ["1st Step", "2nd Step", "3rd Step"];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const CustomStepper = styled(Stepper)(({ theme }) => ({
    "& .MuiStepIcon-root.Mui-active": {
      color: theme.status.warning, // Change the color of the icon here
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: theme.status.warning, // Change the color of the icon here
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    "& .MuiButtonBase-root": {
      color: theme.status.warning,
    },
  }));

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return "";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CustomStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
            component="form"
            sx={{
              marginTop: "30px",
            }}
            autoComplete="off"
          >
            {getStepContent(activeStep)}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <CustomButton color="warning" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </CustomButton>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
