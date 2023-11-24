import React, { useState, useEffect } from "react";
import { FormHelperText, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const WhiteBorderTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: black;
  }
  & .MuiInputLabel-root.Mui-error {
    color: #fc9494;
  }
  & .MuiInputBase-root {
    padding: 10.5px 14px !important;
    border-radius: 7px;
  }
  & .MuiInputLabel-root {
    line-height: 1.7;
    overflow: visible;
  }
  & .MuiInputLabel-root {
    color: rgb(92 91 91 / 100%) !important;
    font-weight: 500 !important;
    font-size: 14px;
    height: 20px;
  }

  & label.Mui-focused {
    color: #4f46e5 !important;
    border-color: black;
  }

  & label.Mui-error {
    color: #fc9494 !important;
  }
  & .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #fc9494 !important;
  }
  & .MuiSvgIcon-root {
    color: black;
  }
`;
const Input = (props) => {
  const {
    name,
    type,
    value,
    onChange,
    maxRows = 1,
    error = null,
    label,
    disable,
    style,
    onBlur,
    helperText,
    maxLength,
    ...other
  } = props;

  const [ClassName, setClassName] = useState("");
  
  useEffect(() => {
    if (other && other.className) {
      setClassName(ClassName + other.className);
    }
  }, []);

  return (
    <WhiteBorderTextField
      type={type || "text"}
      name={name}
      value={value}
      onChange={(e) => {
        if (onChange) {
          if (type == "number") {
            const re = /^\d{0,10}$/;
            if (e.target.value === "" || re.test(e.target.value)) {
              onChange(e);
            }
          } else {
            onChange(e);
          }
        }
      }}
      {...other}
      {...(error && { error: true, helperText: error })}
      multiline
      disabled={disable}
      minRows={maxRows}
      className={ClassName}
      inputProps={{ maxLength: maxLength }}
      style={style}
      sx={{
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "black",
          },
        },
        "&.Mui-focused .MuiOutlinedInput-root": {
          borderColor: "#4f46e5!important",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#4f46e5!important",
          },
        },

        mt: 1,
        color: "white",
        borderRadius: "12px",
      }}
      size="small"
      variant="outlined"
      fullWidth
      onBlur={onBlur}
      helperText={<FormHelperText>{helperText}</FormHelperText>}
      label={label}
    />
  );
};

export default Input;
