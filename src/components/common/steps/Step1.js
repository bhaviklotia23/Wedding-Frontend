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
            id="groomfirstName"
            name="groomfirstName"
            label="First Name"
            value={values.groomfirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomfirstName && Boolean(errors.groomfirstName)}
            helperText={touched.groomfirstName && errors.groomfirstName}
          />
          <TextField
            color="warning"
            id="groomlastName"
            name="groomlastName"
            label="Last Name"
            value={values.groomlastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomlastName && Boolean(errors.groomlastName)}
            helperText={touched.groomlastName && errors.groomlastName}
          />
          <TextField
            color="warning"
            id="groomphoneNumber"
            name="groomphoneNumber"
            label="Phone Number"
            value={values.groomphoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.groomphoneNumber && Boolean(errors.groomphoneNumber)}
            helperText={touched.groomphoneNumber && errors.groomphoneNumber}
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
            id="bridefirstname"
            name="bridefirstname"
            label="First Name"
            value={values.bridefirstname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bridefirstname && Boolean(errors.bridefirstname)}
            helperText={touched.bridefirstname && errors.bridefirstname}
          />
          <TextField
            id="bridelastname"
            name="bridelastname"
            label="Last Name"
            value={values.bridelastname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bridelastname && Boolean(errors.bridelastname)}
            helperText={touched.bridelastname && errors.bridelastname}
          />
          <TextField
            id="bridephoneNumber"
            name="bridephoneNumber"
            label="Phone Number"
            value={values.bridephoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bridephoneNumber && Boolean(errors.bridephoneNumber)}
            helperText={touched.bridephoneNumber && errors.bridephoneNumber}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step1;
