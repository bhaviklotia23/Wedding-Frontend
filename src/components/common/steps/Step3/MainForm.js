import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormData } from "../../../../context/FormDataContext";
import DatePickerComponent from "../../datetimepicker/calender.component";
import TimePickerComponent from "../../datetimepicker/clock.component";
import CustomCounter from "../../counter.component";
import ColorTabs from "../../tabs.component";
import EventForm from "./EventForm";
import { useFormikContext } from "formik";
import DynamicAccordions from "../../../../pages/Test/Test";

const MainForm = ({ index }) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext();

  // const handleIncrement = () => {
  //   if (values.totalEvents < 5) {
  //     setFieldValue("totalEvents", (values.totalEvents || 1) + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (values.totalEvents > 1) {
  //     setFieldValue("totalEvents", (values.totalEvents || 1) - 1);
  //   }
  // };

  // const handleIncrement = () => {
  //   if (values.totalEvents < 5) {
  //     const count = values.weddingDetails.length + 1;
  //     setFieldValue("totalEvents", (values.totalEvents || 1) + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (values.totalEvents > 1) {
  //     setFieldValue("totalEvents", (values.totalEvents || 1) - 1);
  //     const count = Math.max(values.weddingDetails.length - 1, 1);
  //     // setFieldValue("weddingDetails", values.weddingDetails.slice(0, count));
  //   }
  // };

  const handleIncrement = () => {
    if (values.totalEvents < 5) {
      const count = values.weddingDetails.length + 1;
      setFieldValue("totalEvents", (values.totalEvents || 1) + 1);

      const newWeddingDetails = [
        ...values.weddingDetails,
        ...Array.from({ length: 1 }, () => ({
          startDt: "",
          time: "",
          state: "",
          city: "",
          zipcode: "",
          address1: "",
          address2: "",
          nameOfVenue: "",
          totalEvents: 1,
          events: [
            {
              eventName: "",
              description: "",
              includedMeals: "",
              dressCode: "",
            },
          ],
        })),
      ];

      setFieldValue("weddingDetails", newWeddingDetails);
    }
  };

  const handleDecrement = () => {
    if (values.totalEvents > 1) {
      setFieldValue("totalEvents", (values.totalEvents || 1) - 1);
      const count = Math.max(values.weddingDetails.length - 1, 1);
      setFieldValue("weddingDetails", values.weddingDetails.slice(0, count));
    }
  };

  const handleMainChange = (event, index, field) => {
    const updatedWeddingDetails = [...values.weddingDetails];

    const fieldsToUpdate = [
      "address1",
      "address2",
      "nameOfVenue",
      "zipcode",
      "city",
      "state",
    ];

    if (fieldsToUpdate.includes(field)) {
      updatedWeddingDetails[index][field] = event.target.value;
      setFieldValue("weddingDetails", updatedWeddingDetails);
      handleChange(event);
    }
  };

  return (
    <>
      {/* <Box>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Please select your Relationship
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Age"
              onChange={()=>{}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box> */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Stack>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Start Date
            </Typography>
            <DatePickerComponent />
          </Stack>
          <Stack>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Start Time
            </Typography>
            <TimePickerComponent />
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Typography
          sx={{
            margin: "2rem 0 1rem 0",
            fontWeight: "bold",
            fontSize: "1.5rem",
            display: { xs: "flex", md: "none" },
          }}
        >
          Event Information
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CustomCounter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            value={values.totalEvents}
            title="Number of Events"
          />
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Address 1
            </Typography>
            <TextField
              color="warning"
              label="Address 1"
              id={`address1_${index}`}
              name={
                `address1_${index}` ||
                (values.weddingDetails && `weddingDetails[${index}].address1`)
              }
              value={
                values[`address1_${index}`] ||
                (values.weddingDetails &&
                  values.weddingDetails[index]?.address1)
              }
              onChange={(event) => handleMainChange(event, index, "address1")}
              onBlur={handleBlur}
              error={Boolean(
                touched[`address1_${index}`] && errors[`address1_${index}`]
              )}
              helperText={
                touched[`address1_${index}`] && errors[`address1_${index}`]
              }
              // required
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Address 2
            </Typography>
            <TextField
              color="warning"
              label="Address 2"
              id={`address2_${index}`}
              name={
                `address2_${index}` ||
                (values.weddingDetails && `weddingDetails[${index}].address2`)
              }
              value={
                values[`address1_${index}`] ||
                (values.weddingDetails &&
                  values.weddingDetails[index]?.address2)
              }
              onChange={(event) => handleMainChange(event, index, "address2")}
              onBlur={handleBlur}
              error={
                touched[`address2_${index}`] &&
                Boolean(errors[`address2_${index}`])
              }
              helperText={
                touched[`address2_${index}`] && errors[`address2_${index}`]
              }
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Name of Venue
            </Typography>
            <TextField
              color="warning"
              label="Name of Venue"
              id={`nameOfVenue_${index}`}
              name={
                `nameOfVenue_${index}` ||
                (values.weddingDetails &&
                  `weddingDetails[${index}].nameOfVenue`)
              }
              value={
                values[`nameOfVenue_${index}`] ||
                (values.weddingDetails &&
                  values.weddingDetails[index]?.nameOfVenue)
              }
              onChange={(event) =>
                handleMainChange(event, index, "nameOfVenue")
              }
              onBlur={handleBlur}
              error={
                touched[`nameOfVenue_${index}`] &&
                Boolean(errors[`nameOfVenue_${index}`])
              }
              helperText={
                touched[`nameOfVenue_${index}`] &&
                errors[`nameOfVenue_${index}`]
              }
            />
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              State
            </Typography>
            <TextField
              color="warning"
              label="State"
              id={`state_${index}`}
              name={
                `state_${index}` ||
                (values.weddingDetails && `weddingDetails[${index}].state`)
              }
              value={
                values[`state_${index}`] ||
                (values.weddingDetails && values.weddingDetails[index]?.state)
              }
              onChange={(event) => handleMainChange(event, index, "state")}
              onBlur={handleBlur}
              error={
                touched[`state_${index}`] && Boolean(errors[`state_${index}`])
              }
              helperText={touched[`state_${index}`] && errors[`state_${index}`]}
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              City
            </Typography>
            <TextField
              color="warning"
              label="City"
              id={`city_${index}`}
              name={
                `city_${index}` ||
                (values.weddingDetails && `weddingDetails[${index}].city`)
              }
              value={
                values[`city_${index}`] ||
                (values.weddingDetails && values.weddingDetails[index]?.city)
              }
              onChange={(event) => handleMainChange(event, index, "city")}
              onBlur={handleBlur}
              error={
                touched[`city_${index}`] && Boolean(errors[`city_${index}`])
              }
              helperText={touched[`city_${index}`] && errors[`city_${index}`]}
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "1.5rem 0 1rem 0",
                fontWeight: "bold",
              }}
            >
              Zipcode
            </Typography>
            <TextField
              id={`zipcode_${index}`}
              name={
                `zipcode_${index}` ||
                (values.weddingDetails && `weddingDetails[${index}].zipcode`)
              }
              value={
                values[`zipcode_${index}`] ||
                (values.weddingDetails && values.weddingDetails[index]?.zipcode)
              }
              color="warning"
              label="Zipcode"
              onChange={(event) => handleMainChange(event, index, "zipcode")}
              onBlur={handleBlur}
              error={
                touched[`zipcode_${index}`] &&
                Boolean(errors[`zipcode_${index}`])
              }
              helperText={
                touched[`zipcode_${index}`] && errors[`zipcode_${index}`]
              }
            />
          </Stack>
        </Stack>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          sx={{ display: "flex", justifyContent: "center", marginTop: "3ch" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item>
            {values.totalEvents > 0 && (
              <>
                {Array.from(
                  { length: values.totalEvents },
                  (_, accordionIndex) => (
                    <DynamicAccordions title="Event" index={accordionIndex}>
                      <EventForm index={accordionIndex} />
                    </DynamicAccordions>
                  )
                )}
              </>
            )}
          </Grid>
          {/* <Grid item>
            <DynamicAccordions title="Event" count={values.totalEvents}>
              <EventForm count={values.totalEvents} />
            </DynamicAccordions>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default MainForm;
