import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormData } from "../../../context/FormDataContext";
import CalendarInput from "../calender.component";

const WeddingDayForm = () => {
  const { formData, dispatch } = useFormData();

  const [selectedDay, setSelectedDay] = useState(null);

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
      <Box>
        <Typography sx={{ margin: "0.5rem 0 0.5rem 0", fontWeight: "bold" }}>
          Groom's Details
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CalendarInput
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
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
        <Typography sx={{ margin: "0.5rem 0 0.5rem 0", fontWeight: "bold" }}>
          Bride's Details
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
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

export default WeddingDayForm;
