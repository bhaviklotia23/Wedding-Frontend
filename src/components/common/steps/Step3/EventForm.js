import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useFormData } from "../../../../context/FormDataContext";
import CustomizedSwitch from "../../switch.component";
import { useTheme } from "@mui/material/styles";
import { useFormikContext } from "formik";

const EventForm = ({ count }) => {
  const theme = useTheme();
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();

  const handleSwitchChange = (event) => {
    const { checked } = event.target;
    handleChange({ target: { name: "music", value: checked } });
  };

  return (
    <Box
      sx={{
        marginLeft: { xs: "-30px", md: "none" },
      }}
    >
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
            Name of Event
          </Typography>
          <TextField
            color="warning"
            label="Event Name"
            id="event"
            name="event"
            value={values.event}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.event && Boolean(errors.event)}
            helperText={touched.event && errors.event}
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
            Dress code
          </Typography>
          <TextField
            color="warning"
            label="Dress code"
            id="dressCode"
            name="dressCode"
            value={values.dressCode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dressCode && Boolean(errors.dressCode)}
            helperText={touched.dressCode && errors.dressCode}
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
            Music/Dance
          </Typography>
          <FormControl>
            <CustomizedSwitch
              label={values.music ? "Yes" : "No"}
              checked={values.music}
              handleChange={handleSwitchChange}
            />
          </FormControl>
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
            Description of Event
          </Typography>
          <TextField
            sx={{
              width: "100%",
              maxWidth: "100%",
              [theme.breakpoints.up("md")]: {
                maxWidth: "100ch",
              },
            }}
            color="warning"
            multiline
            rows={4}
            id="descriptionCode"
            name="descriptionCode"
            value={values.descriptionCode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.descriptionCode && Boolean(errors.descriptionCode)}
            helperText={touched.descriptionCode && errors.descriptionCode}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default EventForm;
