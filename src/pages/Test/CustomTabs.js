import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import UserForm from './UserForm';

const UserTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState([{},{},{}]); // Initialize for 3 forms

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSubmit = (values) => {
    // Update form data for the current tab
    const updatedFormData = [...formData];
    updatedFormData[currentTab] = values;
    setFormData(updatedFormData);

    console.log(`Form Data from Tab ${currentTab}:`, values);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        <Tab label="User Form 1" />
        <Tab label="User Form 2" />
        <Tab label="User Form 3" />
      </Tabs>
      {formData.map((data, index) => (
        currentTab === index && <UserForm key={index} initialValues={data} handleSubmit={handleSubmit} />
      ))}
    </Box>
  );
};

export default UserTabs;
