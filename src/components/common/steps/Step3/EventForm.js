import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useFormData } from "../../../../context/FormDataContext";
import CustomizedSwitch from "../../switch.component";
import { useTheme } from "@mui/material/styles";
import { useFormikContext } from "formik";

const EventForm = ({ count, index }) => {
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
            id={`event_${index}`}
            name={`event_${index}`}
            value={values[`event_${index}`]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched[`event_${index}`] && Boolean(errors[`event_${index}`])
            }
            helperText={touched[`event_${index}`] && errors[`event_${index}`]}
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
            id={`dressCode_${index}`}
            name={`dressCode_${index}`}
            value={values[`dressCode_${index}`]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched[`dressCode_${index}`] &&
              Boolean(errors[`dressCode_${index}`])
            }
            helperText={
              touched[`dressCode_${index}`] && errors[`dressCode_${index}`]
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
            id={`descriptionCode_${index}`}
            name={`descriptionCode_${index}`}
            value={values[`descriptionCode_${index}`]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched[`descriptionCode_${index}`] &&
              Boolean(errors[`descriptionCode_${index}`])
            }
            helperText={
              touched[`descriptionCode_${index}`] &&
              errors[`descriptionCode_${index}`]
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default EventForm;
