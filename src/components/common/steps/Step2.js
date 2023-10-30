import React from "react";
import { TextField } from "@mui/material";
import { useFormData } from "../../../context/FormDataContext";

const Step2 = () => {
  const { formData, dispatch } = useFormData();

  return (
    <div>
      <TextField
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) =>
          dispatch({ type: "update", payload: { phoneNumber: e.target.value } })
        }
      />
      <TextField
        label="City"
        value={formData.city}
        onChange={(e) =>
          dispatch({ type: "update", payload: { city: e.target.value } })
        }
      />
    </div>
  );
};

export default Step2;
