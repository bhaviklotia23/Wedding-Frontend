import React, { createContext, useState } from "react";

export const Step3DataContext = createContext();

export const Step3DataProvider = ({ children }) => {
//   const [data, setData] = useState({
//     currentDay: 0,
//     eventCount: 1,
//     address1: "",
//     address2: "",
//     venueName: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     eventName: "",
//     dressCode: "",
//     musicDance: false,
//     eventDescription: "",
//   });

  const [data, setData] = useState({
    tab1: { name: '', email: '', phoneNumber: '' },
    tab2: { name: '', email: '', phoneNumber: '' },
    tab3: { name: '', email: '', phoneNumber: '' },
  });

  const setTabData = (tabKey, newData) => {
    setData((prevData) => ({
      ...prevData,
      [tabKey]: { ...prevData[tabKey], ...newData },
    }));
  };

  console.log(data, "data");

  return (
    <Step3DataContext.Provider
      value={{
        data,
        setTabData,
      }}
    >
      {children}
    </Step3DataContext.Provider>
  );
};
