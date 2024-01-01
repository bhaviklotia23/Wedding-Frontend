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
import ColorTabs from "../../tabs.component";
import CustomCounter from "../../counter.component";
import WeddingDayForm from "./WeddingDayForm";
import { useFormikContext } from "formik";

const Step3 = () => {
  const [value, setValue] = useState(1);
  const [tabValue, setTabValue] = useState(1);
 

  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();


  const handleSwitchChange = (event) => {
    const { checked } = event.target;
    handleChange({ target: { name: "alcohol", value: checked } });
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    handleChange("foodOffered")(event); 
  };

  // const handleIncrement = () => {
  //   if (value < 5) {
  //     setValue(value + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (value > 1) {
  //     setValue(value - 1);
  //   }
  // };

  const handleIncrement = () => {
    if (values.weddingDay < 5) {
      const newValue = values.weddingDay + 1;
      handleChange({ target: { name: "weddingDay", value: newValue } });
    }
  };
  

  const handleDecrement = () => {
    const newValue = values.weddingDay > 1 ? values.weddingDay - 1 : values.weddingDay;
    console.log("newValue", newValue);
    handleChange({ target: { name: "weddingDay", value: newValue } });
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
        <Grid item >
          {values.weddingDay > 0 && (
            <ColorTabs
              tabValue={tabValue}
              setTabValue={setTabValue}
              count={values.weddingDay}
              title="Day"
            >
              <WeddingDayForm dayCount={tabValue} />
            </ColorTabs>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step3;
