import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormData } from "../../../../context/FormDataContext";
import DatePickerComponent from "../../datetimepicker/calender.component";
import TimePickerComponent from "../../datetimepicker/clock.component";
import CustomCounter from "../../counter.component";
import ColorTabs from "../../tabs.component";
import EventForm from "./EventForm";

const WeddingDayForm = ({ dayCount }) => {
  const { formData, dispatch } = useFormData();
  const [value, setValue] = useState(1);
  const [tabValue, setTabValue] = useState(1);

  const handleIncrement = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
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
      <Box>
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
            value={value}
            title={`Events (Day ${dayCount})`}
          />
          <Stack>
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
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
              }
            />
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
              Address 2
            </Typography>
            <TextField
              color="warning"
              label="Address 2"
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
              }
            />
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
              Name of Venue
            </Typography>
            <TextField
              color="warning"
              label="Name of Venue"
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
              }
            />
          </Stack>
        </Stack>
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
              State
            </Typography>
            <TextField
              color="warning"
              label="State"
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
              }
            />
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
              City
            </Typography>
            <TextField
              color="warning"
              label="City"
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
              }
            />
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
              Zipcode
            </Typography>
            <TextField
              color="warning"
              label="Zipcode"
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "update", payload: { email: e.target.value } })
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
            <ColorTabs
              tabValue={tabValue}
              setTabValue={setTabValue}
              count={value}
              title="Event"
            >
              <EventForm count={tabValue} />
            </ColorTabs>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WeddingDayForm;
