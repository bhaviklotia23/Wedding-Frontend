import React, { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import { Stepper, Step, StepLabel, Button, Box, Paper } from "@mui/material";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

import Step3 from "./steps/Step3/Step3";
import Step3V2 from "./steps/Step3/Step3V2";
import styled from "@emotion/styled";
import * as Yup from "yup";
import axios from "axios";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [WeddingDays, setWeddingDays] = useState(1);
  const [EventsDay, setEventsDays] = useState(1);

  // const { values } = useFormikContext();

  // const dynamicFormsLength = values.weddingDay || 1;
  // const dayCount = values.dayCount || 1;
  // const totalEvents = values.totalEvents || 1;
  // const eventCount = values.eventCount || 1;

  const initialValues = {
    groomfirstName: "",
    groomlastName: "",
    groomemail: "",
    groomphoneNumber: "",
    bridefirstname: "",
    bridelastname: "",
    brideemail: "",
    bridephoneNumber: "",
    story: "",
    guidefirstname: "",
    guidelastname: "",
    guideemail: "",
    guidephoneNumber: "",
    guiderealtionship: "",
    // engagementVideo: "",
    url: "",
    foodOffered: "",
    alcohol: false,
    weddingDay: 1,
    totalEvents: 1,
    weddingDetails: [
      {
        startDt: "",
        time: "",
        state: "",
        city: "",
        zipcode: "",
        address1: "",
        address2: "",
        nameOfVenue: "",
        totalEvents: 1,

        events: [{ eventName: "", description: "", dressCode: "", music: "" }],
      },
    ],
    // weddingDetails: Array.from({ length: dynamicFormsLength }, () => ({
    //   // initial dynamic form values
    //   dayCount: dayCount,
    //   startDt: "",
    //   time: "",
    //   state: "",
    //   city: "",
    //   events: Array.from({ length: totalEvents }, () => ({
    //     // initial dynamic form values
    //     eventCount: eventCount,
    //     eventName: "",
    //     description: "",
    //     includedMeals: "",
    //   })),
    // })),
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    try {
      const {
        groomfirstName,
        groomlastName,
        groomemail,
        groomphoneNumber,
        bridefirstname,
        bridelastname,
        brideemail,
        bridephoneNumber,
        url,
        foodOffered,
        alcohol,
        weddingDay,
        event,
        totalEvents,
        weddingDetails,
        guidefirstname,
        guidelastname,
        guideemail,
        guidephoneNumber,
        guiderealtionship,
      } = values;
      console.log("values111111111111!", values);

      // Creating the payload
      const payload = {
        groomfirstName,
        groomlastName,
        groomemail,
        groomphoneNumber,
        bridefirstname,
        bridelastname,
        brideemail,
        bridephoneNumber,
        guidefirstname,
        guidelastname,
        guideemail,
        guidephoneNumber,
        guiderealtionship,
        url,
        foodOffered,
        alcohol,
        weddingDay,
        event,
        weddingDetails: weddingDetails.map((detail) => ({
          startDt: detail.startDt,
          time: detail.time,
          state: detail.state,
          city: detail.city,
          zipcode: detail.zipcode,
          address1: detail.address1,
          address2: detail.address2,
          nameOfVenue: detail.nameOfVenue,
          totalEvents: detail.totalEvents,
          events: detail.events.map((event) => ({
            eventName: event.eventName,
            description: event.description,
            dressCode: event.dressCode,
            music: event.music,
          })),
        })),
      };

      const res = await axios.post(
        "http://localhost:5000/api/v1/registerWedding",
        payload
      );
    } catch (error) {
      console.error("Error:", error);
    }
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

  const validationObject = {
    foodOffered: Yup.string().required("foodOffered is required"),
    alcohol: Yup.string().required("alcohol is required"),
    address1: Yup.string().required("address1 is required"),
    address2: Yup.string().required("address2 is required"),
    nameOfVenue: Yup.string().required("venue is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    zipCode: Yup.string().required("zipCode is required"),
    event: Yup.string().required("event is required"),
    dressCode: Yup.string().required("dressCode is required"),
    music: Yup.string().required("music is required"),
    descriptionCode: Yup.string().required("descriptionCode is required"),
  };
  const validationObjectKeys = Object.keys(validationObject);
  const validationSchemaObjectForStep3 = {};
  Array.from({ length: WeddingDays }).map((_, index) => {
    validationObjectKeys.forEach((data) => {
      validationSchemaObjectForStep3[data + "_" + index] =
        validationObject[data];
    });
  });

  const validationObjectForEvent = {
    foodOffered: Yup.string().required("foodOffered is required"),
    alcohol: Yup.string().required("alcohol is required"),
    event: Yup.string().required("event is required"),
    dressCode: Yup.string().required("dressCode is required"),
    music: Yup.string().required("music is required"),
    descriptionCode: Yup.string().required("descriptionCode is required"),
  };
  const validationObjectForEventKeys = Object.keys(validationObjectForEvent);
  const validationSchemaObjectForEventStep3 = {};

  Array.from({ length: EventsDay }).map((_, index) => {
    validationObjectForEventKeys.forEach((data) => {
      validationSchemaObjectForEventStep3[data + "_" + index] =
        validationObjectForEvent[data];
    });
  });

  const validationSchema = [
    Yup.object({
      groomFirstName: Yup.string().required("Groom's First name is required"),
      groomLastName: Yup.string().required("Groom's Last name is required"),
      groomPhoneNumber: Yup.string().required(
        "Groom's Phone Number is required"
      ),
      brideFirstName: Yup.string().required("Bride's First name is required"),
      brideLastName: Yup.string().required("Bride's Last name is required"),
      bridePhoneNumber: Yup.string().required(
        "Bride's Phone Number is required"
      ),
    }),
    Yup.object({
      story: Yup.string().required("Story is required"),
    }),
    Yup.object(validationSchemaObjectForStep3),
    Yup.object(validationSchemaObjectForEventStep3),
  ];
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        // return <Step3 />;
        return <Step3V2 />;
      case 3:
        // return <Step3 />;
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema[activeStep]}
      onSubmit={activeStep === steps.length - 1 ? handleSubmit : handleNext}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => {
        setWeddingDays(values?.weddingDay || 1);
        setEventsDays(values?.totalEvents || 1);

        return (
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
        );
      }}
    </Formik>
  );
};

export default StepperForm;
