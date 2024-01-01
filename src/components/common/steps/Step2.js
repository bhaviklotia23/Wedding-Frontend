import React from "react";
import { Box, Stack, Typography, TextField } from "@mui/material";
import { useFormikContext } from "formik";
// import { TextField } from "formik-material-ui";

const Step2 = () => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2.5em",
          }}
        >
          Couple Memories
        </Typography>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Your Story
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            sx={{ width: "100%", maxWidth: { md: "250ch" } }}
            color="warning"
            id="story"
            name="story"
            label="Your Story"
            rows={4}
            multiline
            value={values.story}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.story && Boolean(errors.story)}
            helperText={touched.story && errors.story}
          />
        </Stack>
      </Box>
      <Box>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Video URL
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            sx={{ width: "100%", maxWidth: { md: "85ch" } }}
            color="warning"
            id="engagementVideo"
            name="engagementVideo"
            label="Video URL"
            value={values.engagementVideo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.engagementVideo && Boolean(errors.engagementVideo)}
            helperText={touched.engagementVideo && errors.engagementVideo}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step2;
