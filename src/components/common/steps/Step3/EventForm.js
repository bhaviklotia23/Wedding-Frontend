import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useFormData } from "../../../../context/FormDataContext";
import CustomizedSwitch from "../../switch.component";
import { useTheme } from "@mui/material/styles";
import { useFormikContext } from "formik";

const EventForm = ({ count, index }) => {
  const theme = useTheme();
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext();

  console.log("valuesEvenrt", values);

  const handleMainChange = (event, index, field) => {
    const updatedWeddingDetails = [...values.weddingDetails];
    const fieldsToUpdate = ["eventName", "description", "dressCode", "music"];

    if (fieldsToUpdate.includes(field)) {
      if (
        field === "eventName" ||
        field === "description" ||
        field === "dressCode" ||
        field === "music"
      ) {
        updatedWeddingDetails[index].events[0][field] = event.target.value;
      } else {
        updatedWeddingDetails[index][field] = event.target.value;
      }

      setFieldValue("weddingDetails", updatedWeddingDetails);
      handleChange(event);
    }
  };

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
          {/* <TextField
            color="warning"
            label="Event Name"
            id={`eventName_${index}`}
            name={
              `eventName_${index}` ||
              (values.weddingDetails && `weddingDetails[${index}].eventName`)
            }
            value={
              values[`eventName_${index}`] ||
              (values.weddingDetails && values.weddingDetails[index]?.eventName)
            }
            onChange={(event) => handleMainChange(event, index, "eventName")}
            onBlur={handleBlur}
            error={
              touched[`eventName_${index}`] &&
              Boolean(errors[`eventName_${index}`])
            }
            helperText={
              touched[`eventName_${index}`] && errors[`eventName_${index}`]
            }
          /> */}
          <TextField
            color="warning"
            label="Event Name"
            id={`eventName_${index}`}
            name={`event_${index}.eventName`}
            value={
              values[`event_${index}`]?.eventName ||
              values[`eventName_${index}`]
            }
            onChange={(event) => handleMainChange(event, index, "eventName")}
            onBlur={handleBlur}
            error={
              touched[`eventName_${index}`] &&
              Boolean(errors[`eventName_${index}`])
            }
            helperText={
              touched[`eventName_${index}`] && errors[`eventName_${index}`]
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
            Dress code
          </Typography>
          <TextField
            color="warning"
            label="Dress code"
            id={`dressCode_${index}`}
            name={`dressCode_${index}.dressCode`}
            value={
              values[`dressCode_${index}`]?.dressCode ||
              values[`dressCode_${index}`]
            }
            onChange={(event) => handleMainChange(event, index, "dressCode")}
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
            id={`description${index}`}
            name={`description_${index}.description`}
            value={
              values[`description_${index}`]?.description ||
              values[`description_${index}`]
            }
            onChange={(event) => handleMainChange(event, index, "description")}
            onBlur={handleBlur}
            error={
              touched[`description${index}`] &&
              Boolean(errors[`description${index}`])
            }
            helperText={
              touched[`description${index}`] && errors[`description${index}`]
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default EventForm;
