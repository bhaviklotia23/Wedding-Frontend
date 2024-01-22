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
  console.log("values", values.totalEvents);

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

  const handleIncrement = () => {
    if (values.totalEvents < 5) {
      const count = values.weddingDetails.length + 1;
      setFieldValue("totalEvents", (values.totalEvents || 1) + 1);
    }
  };

  const handleDecrement = () => {
    if (values.totalEvents > 1) {
      setFieldValue("totalEvents", (values.totalEvents || 1) - 1);
      const count = Math.max(values.weddingDetails.length - 1, 1);
      // setFieldValue("weddingDetails", values.weddingDetails.slice(0, count));
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
              name={`address1_${index}`}
              value={values[`address1_${index}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[`address1_${index}`] &&
                Boolean(errors[`address1_${index}`])
              }
              helperText={
                touched[`address1_${index}`] && errors[`address1_${index}`]
              }
              required
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
              name={`address2_${index}`}
              value={values[`address2_${index}`]}
              onChange={handleChange}
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
              id={`venue_${index}`}
              name={`venue_${index}`}
              value={values[`venue_${index}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[`venue_${index}`] && Boolean(errors[`venue_${index}`])
              }
              helperText={touched[`venue_${index}`] && errors[`venue_${index}`]}
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
              name={`state_${index}`}
              value={values[`state_${index}`]}
              onChange={handleChange}
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
              name={`city_${index}`}
              value={values[`city_${index}`]}
              onChange={handleChange}
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
              id={`zipCode_${index}`}
              name={`zipCode_${index}`}
              color="warning"
              label="Zipcode"
              value={values[`zipCode_${index}`]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched[`zipCode_${index}`] &&
                Boolean(errors[`zipCode_${index}`])
              }
              helperText={
                touched[`zipCode_${index}`] && errors[`zipCode_${index}`]
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
