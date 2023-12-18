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

const Step3 = () => {
  const [value, setValue] = useState(1);
  const [tabValue, setTabValue] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleIncrement = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
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
              value={value}
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
                  sx={{ width: "20ch" }}
                  color="warning"
                  id="demo-simple-select"
                  value="Non-Vegetarian"
                  onChange={() => {}}
                >
                  <MenuItem value="Non-Vegetarian">Vegetarian</MenuItem>
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
                  label={checked ? "Yes" : "No"}
                  checked={checked}
                  handleChange={handleChange}
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
          {value > 0 && (
            <ColorTabs
              tabValue={tabValue}
              setTabValue={setTabValue}
              count={value}
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
