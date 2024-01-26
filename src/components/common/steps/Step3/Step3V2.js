import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CustomizedSwitch from "../../switch.component";
import CustomCounter from "../../counter.component";
import { FieldArray, useFormikContext } from "formik";
import DynamicAccordions from "../../../../pages/Test/Test";
import MainForm from "./MainForm";

const Step3V2 = () => {
  const { values, errors, touched, setFieldValue, handleChange, handleBlur } =
    useFormikContext();

  const handleIncrement = () => {
    if (values.weddingDay < 5) {
      const count = values.weddingDetails.length + 1;
      setFieldValue("weddingDay", (values.weddingDay || 1) + 1);

      const newWeddingDetails = [
        ...values.weddingDetails,
        ...Array.from({ length: 1 }, () => ({
          startDt: "",
          time: "",
          state: "",
          city: "",
          zipcode: "",
          address1: "",
          address2: "",
          nameOfVenue: "",
          totalEvents: 1,
          events: [
            {
              eventName: "",
              description: "",
              includedMeals: "",
              dressCode: "",
            },
          ],
        })),
      ];

      setFieldValue("weddingDetails", newWeddingDetails);
    }
  };

  const handleDecrement = () => {
    if (values.weddingDay > 1) {
      setFieldValue("weddingDay", (values.weddingDay || 1) - 1);
      const count = Math.max(values.weddingDetails.length - 1, 1);
      setFieldValue("weddingDetails", values.weddingDetails.slice(0, count));
    }
  };

  const handleSelectChange = (event) => {
    handleChange("foodOffered")(event);
  };

  const handleSwitchChange = (event) => {
    const { checked } = event.target;
    handleChange({ target: { name: "alcohol", value: checked } });
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2.5em",
        }}
      >
        Wedding Details
      </Typography>
      <Grid
        direction={{ xs: "column", md: "row" }}
        sx={{ display: "flex", justifyContent: "center" }}
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <CustomCounter
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              value={values.weddingDay}
              title="Wedding Days"
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
                Food Offered
              </Typography>
              <FormControl sx={{ marginRight: "3rem" }}>
                <Select
                  id="foodOffered"
                  sx={{ width: "20ch" }}
                  color="warning"
                  value={values.foodOffered}
                  onChange={handleSelectChange}
                  onBlur={handleBlur}
                  name="foodOffered"
                >
                  <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                  <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
                  <MenuItem value="Both">Both</MenuItem>
                </Select>
              </FormControl>
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
                Alcohol Offered
              </Typography>
              <FormControl>
                <CustomizedSwitch
                  label={values.alcohol ? "Yes" : "No"}
                  checked={values.alcohol}
                  handleChange={handleSwitchChange}
                />
              </FormControl>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        sx={{ display: "flex", justifyContent: "center", marginTop: "3ch" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          {values.weddingDay > 0 && (
            <>
              {Array.from(
                { length: values.weddingDay },
                (_, accordionIndex) => (
                  <DynamicAccordions title="Day" index={accordionIndex}>
                    <MainForm index={accordionIndex} />
                  </DynamicAccordions>
                )
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step3V2;
