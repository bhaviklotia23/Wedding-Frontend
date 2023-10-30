import React from "react";
import { TextField } from "@mui/material";
import { useFormData } from "../../../context/FormDataContext";

const Step3 = () => {
  const { formData, dispatch } = useFormData();

  return (
    <div>
      <TextField
        label="Password"
        value={formData.password}
        onChange={(e) =>
          dispatch({ type: "update", payload: { password: e.target.value } })
        }
      />
      <TextField
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          dispatch({
            type: "update",
            payload: { confirmPassword: e.target.value },
          })
        }
      />
    </div>
  );
};

export default Step3;
