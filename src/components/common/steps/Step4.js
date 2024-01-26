import { Box, Stack, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
// import { useFormData } from "../../../context/FormDataContext";

const Step4 = () => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();

  return (
    <>
      {/* <Box>
        <Typography sx={{ margin: "0.5rem 0 0.5rem 0", fontWeight: "bold" }}>
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
              onChange={()=>{} {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box> */}
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2.5em",
          }}
        >
          Ceremony Guide's Details
        </Typography>
        <Typography sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}>
          Guide's Details
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            color="warning"
            id="guidefirstname"
            name="guidefirstname"
            label="First Name"
            value={values.guidefirstname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.guidefirstname && Boolean(errors.guidefirstname)}
            helperText={touched.guidefirstname && errors.guidefirstname}
          />
          <TextField
            color="warning"
            id="guidelastname"
            name="guidelastname"
            label="Last Name"
            value={values.guidelastname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.guidelastname && Boolean(errors.guidelastname)}
            helperText={touched.guidelastname && errors.guidelastname}
          />
          <TextField
            color="warning"
            id="guidephoneNumber"
            name="guidephoneNumber"
            label="Phone Number"
            value={values.guidephoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.guidephoneNumber && Boolean(errors.guidephoneNumber)}
            helperText={touched.guidephoneNumber && errors.guidephoneNumber}
          />
        </Stack>
      </Box>
      <Box>
        <Typography
          sx={{ margin: "1.5rem 0 1rem 0", fontWeight: "bold" }}
        ></Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            color="warning"
            id="guideemail"
            name="guideemail"
            label="Email"
            value={values.guideemail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.guideemail && Boolean(errors.guideemail)}
            helperText={touched.guideemail && errors.guideemail}
          />
          <TextField
            color="warning"
            id="guiderealtionship"
            name="guiderealtionship"
            label="Realtionship of couple"
            value={values.guiderealtionship}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.guiderealtionship && Boolean(errors.guiderealtionship)
            }
            helperText={touched.guiderealtionship && errors.guiderealtionship}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step4;
