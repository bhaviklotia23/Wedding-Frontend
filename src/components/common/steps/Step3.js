import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomizedSwitch from "../switch.component";
import ColorTabs from "../tabs.component";

const Step3 = () => {
  const [value, setValue] = useState(1);
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
            <Stack>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "0.5rem 0 0.5rem 0",
                  fontWeight: "bold",
                }}
              >
                Wedding Days
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "3rem",
                }}
              >
                <Button
                  onClick={handleDecrement}
                  variant="outlined"
                  sx={{
                    borderColor: "black",
                    background: "#ff5722",
                    color: "white",
                    "&:hover": {
                      background: "black",
                    },
                  }}
                >
                  <Typography sx={{ color: "white" }}>-</Typography>
                </Button>
                <TextField
                  type="text"
                  color="warning"
                  value={value}
                  readOnly
                  sx={{
                    width: "7ch",
                    display: "flex",
                    mx: 1,
                    textAlign: "center", // Center the text in TextField
                  }}
                />

                <Button
                  onClick={handleIncrement}
                  variant="outlined"
                  sx={{
                    borderColor: "black",
                    background: "#ff5722",
                    color: "white",
                    "&:hover": {
                      background: "black",
                    },
                  }}
                >
                  <Typography sx={{ color: "white" }}>+</Typography>
                </Button>
              </Box>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "0.5rem 0 0.5rem 0",
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
                  margin: "0.5rem 0 0.5rem 0",
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
        sx={{ display: "flex", justifyContent: "center", marginTop:"3ch" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>{value > 0 && <ColorTabs count={value} />}</Grid>
      </Grid>
    </Box>
  );
};

export default Step3;
