import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateTimePickerWrapper from "./DateTimePickerWrapper";
const DatePickerComponent = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <DateTimePickerWrapper component={"DatePicker"}>
      <DatePicker
        // sx={{
        //   "& .MuiInputLabel-root.Mui-focused": { color: "#F95D44" }, //styles the label
        //   "& .MuiInput-underline:after": {
        //     borderBottomColor: "#F95D44",
        //   },
        // }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </DateTimePickerWrapper>
  );
};

export default DatePickerComponent;
