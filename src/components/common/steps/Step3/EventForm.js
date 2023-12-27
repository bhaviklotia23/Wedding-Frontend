import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useFormData } from "../../../../context/FormDataContext";
import CustomizedSwitch from "../../switch.component";

const EventForm = ({ count }) => {
  // const { formData, dispatch } = useFormData();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Typography
        sx={{
          margin: "0.5rem 0 1rem 0",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Event {count}
      </Typography>
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
            Name of Event
          </Typography>
          <TextField
            color="warning"
            label="Event Name"
            // value={formData.email}
            onChange={
              (e) => {}
              // dispatch({ type: "update", payload: { email: e.target.value } })
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
            Dress code
          </Typography>
          <TextField
            color="warning"
            label="Dress code"
            // value={formData.email}
            onChange={
              (e) => {}
              // dispatch({ type: "update", payload: { email: e.target.value } })
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
            Music/Dance
          </Typography>
          <FormControl>
            <CustomizedSwitch
              label={checked ? "Yes" : "No"}
              checked={checked}
              handleChange={handleChange}
            />
          </FormControl>
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
            Description of Event
          </Typography>
          <TextField
            sx={{ width: "100ch" }}
            color="warning"
            multiline
            rows={4}
            // value={formData.email}
            onChange={
              (e) => {}
              // dispatch({ type: "update", payload: { email: e.target.value } })
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default EventForm;
