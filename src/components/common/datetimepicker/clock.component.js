import React from "react";
import DateTimePickerWrapper from "./DateTimePickerWrapper";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import styled from "@emotion/styled";

const TimePickerComponent = () => {
  const CustomTimePicker = styled(TimePicker)(({ theme }) => ({
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  }));
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));
  return (
    <DateTimePickerWrapper component={"TimePicker"}>
      <TimePicker
        // sx={{
        //   "& .MuiInputLabel-root.Mui-focused": { color: "#F95D44" }, //styles the label
        //   "& .MuiInput-underline:after": {
        //     borderBottomColor: "#F95D44",
        //   },
        // }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }}
      />
    </DateTimePickerWrapper>
  );
};

export default TimePickerComponent;
