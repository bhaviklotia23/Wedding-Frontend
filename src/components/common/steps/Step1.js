import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormData } from "../../../context/FormDataContext";

const Step1 = () => {
  const { formData, dispatch } = useFormData();

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
              onChange={()=>{}}
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
            label="First Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "update", payload: { name: e.target.value } })
            }
          />
          <TextField
            color="warning"
            label="Last Name"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "update", payload: { email: e.target.value } })
            }
          />
          <TextField
            color="warning"
            label="Phone Number"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "update", payload: { email: e.target.value } })
            }
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
            label="First Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "update", payload: { name: e.target.value } })
            }
          />
          <TextField
            color="warning"
            label="Last Name"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "update", payload: { email: e.target.value } })
            }
          />
          <TextField
            color="warning"
            label="Phone Number"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "update", payload: { email: e.target.value } })
            }
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step1;
