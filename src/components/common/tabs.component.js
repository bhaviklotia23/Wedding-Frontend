import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import WeddingDayForm from "./steps/WeddingDayForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ColorTabs({ count }) {
  const CustomTab = styled(Tab)(({ theme }) => ({
    "&.Mui-selected": {
      color: "#ff5722", // Change this to the desired color
    },
  }));

  const CustomTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
      backgroundColor: "#111111",
    },
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return Array.from({ length: count }, (_, index) => (
      <CustomTab key={index} label={`Day ${index + 1}`} {...a11yProps(index)} />
    ));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CustomTabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {renderTabs()}
      </CustomTabs>
      {Array.from({ length: count }, (_, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <WeddingDayForm />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
