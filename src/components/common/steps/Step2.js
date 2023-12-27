import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useFormData } from "../../../context/FormDataContext";

const Step2 = () => {
  const { formData, dispatch } = useFormData();

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
          sx={{
              width: "100%",
              maxWidth: { md: "250ch" },
            }}
            // sx={{ width: "250ch" }}
            multiline
            rows={4}
            color="warning"
            label="Your Story"
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "update", payload: { email: e.target.value } })
            }
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
            sx={{
              width: "100%",
              maxWidth: { md: "85ch" },
            }}
            // sx={{width:"100%"}}
            color="warning"
            placeholder="Paste your video URL here"
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "update", payload: { name: e.target.value } })
            }
          />
        </Stack>
      </Box>
    </>
  );
};

export default Step2;
