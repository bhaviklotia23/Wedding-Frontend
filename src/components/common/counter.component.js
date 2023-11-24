import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const CustomCounter = ({ handleDecrement, handleIncrement, value, title }) => {
  return (
    <Stack>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1.5rem 0 1rem 0",
          fontWeight: "bold",
        }}
      >
        {title}
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
  );
};

export default CustomCounter;
