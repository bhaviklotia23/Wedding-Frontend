import React from "react";
import { Box, Stack, Typography, TextField } from "@mui/material";
// import { TextField } from "formik-material-ui";
import { useFormikContext } from "formik";

const Step1 = () => {
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
          Personal Details
        </Typography>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Groom's Details
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          // spacing={{ xs: 2, md: 4 }}
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   flexWrap: "wrap",
          // }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            color="warning"
            id="groomFirstName"
            name="groomFirstName"
            label="First Name"
            value={values.groomFirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomFirstName && Boolean(errors.groomFirstName)}
            helperText={touched.groomFirstName && errors.groomFirstName}
          />
          <TextField
            color="warning"
            id="groomLastName"
            name="groomLastName"
            label="Last Name"
            value={values.groomLastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomLastName && Boolean(errors.groomLastName)}
            helperText={touched.groomLastName && errors.groomLastName}
          />
          <TextField
            color="warning"
            id="groomPhoneNumber"
            name="groomPhoneNumber"
            label="Phone Number"
            value={values.groomPhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomPhoneNumber && Boolean(errors.groomPhoneNumber)}
            helperText={touched.groomPhoneNumber && errors.groomPhoneNumber}
          />
        </Stack>
      </Box>
      <Box>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Bride's Details
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          // spacing={{ xs: 2, md: 4 }} 
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   flexWrap: "wrap", 
          // }}

          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            color="warning"
            id="brideFirstName"
            name="brideFirstName"
            label="First Name"
            value={values.brideFirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.brideFirstName && Boolean(errors.brideFirstName)}
            helperText={touched.brideFirstName && errors.brideFirstName}
          />
          <TextField
            id="brideLastName"
            name="brideLastName"
            label="Last Name"
            value={values.brideLastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.brideLastName && Boolean(errors.brideLastName)}
            helperText={touched.brideLastName && errors.brideLastName}
          />
          <TextField
            id="bridePhoneNumber"
            name="bridePhoneNumber"
            label="Phone Number"
            value={values.bridePhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bridePhoneNumber && Boolean(errors.bridePhoneNumber)}
            helperText={touched.bridePhoneNumber && errors.bridePhoneNumber}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step1;
