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

  const handleIncrement = () => {
    if (values.totalEvents < 5) {
      setFieldValue("totalEvents", (values.totalEvents || 1) + 1);
    }
  };

  const handleDecrement = () => {
    if (values.totalEvents > 1) {
      setFieldValue("totalEvents", (values.totalEvents || 1) - 1);
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
              id="address1"
              name="address1"
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address1 && Boolean(errors.address1)}
              helperText={touched.address1 && errors.address1}
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
              id="address2"
              name="address2"
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address2 && Boolean(errors.address2)}
              helperText={touched.address2 && errors.address2}
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
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.venue && Boolean(errors.venue)}
              helperText={touched.venue && errors.venue}
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
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && Boolean(errors.state)}
              helperText={touched.state && errors.state}
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
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
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
              id="zipCode"
              name="zipCode"
              color="warning"
              label="Zipcode"
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.zipCode && Boolean(errors.zipCode)}
              helperText={touched.zipCode && errors.zipCode}
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
            <DynamicAccordions title="Event" count={values.totalEvents}>
              <EventForm count={values.totalEvents} />
            </DynamicAccordions>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainForm;
