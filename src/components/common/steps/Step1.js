import React from "react";
import { Box, TextField } from "@mui/material";
import { useFormData } from "../../../context/FormDataContext";

const Step1 = () => {
  const { formData, dispatch } = useFormData();

  return (
    <Box sx={{ margin: "2rem 2rem 2rem 2rem" }}>
      <TextField
        color="warning"
        label="Name"
        value={formData.name}
        onChange={(e) =>
          dispatch({ type: "update", payload: { name: e.target.value } })
        }
      />
      <TextField
        sx={{ marginLeft: "0.9rem" }}
        label="Email"
        value={formData.email}
        onChange={(e) =>
          dispatch({ type: "update", payload: { email: e.target.value } })
        }
      />
      <TextField
        sx={{ marginTop: "1.2rem" }}
        label="Email"
        value={formData.email}
        onChange={(e) =>
          dispatch({ type: "update", payload: { email: e.target.value } })
        }
      />
    </Box>
  );
};

export default Step1;

// Create similar components for other steps
