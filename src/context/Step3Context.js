import React, { createContext, useState } from "react";

export const Step3DataContext = createContext();

export const Step3DataProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    eventCount: 1,
    address1: "",
    address2: "",
    venueName: "",
    city: "",
    state: "",
    zipCode: "",
    eventName: "",
    dressCode: "",
    musicDance: false,
    eventDescription: "",
  });
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalFilterCount, setTotalFilterCount] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    ServiceProviderType: "",
    ServiceProviderName: "",
    CompanyName: "",
    DBAName: "",
    Stage: "",
    Status: "",
    PrimaryTrade: "",
    SecondaryTrade: "",
    TertiaryTrade: "",
    City: "",
    State: "",
    ZipCode: "",
  });

  const countFilteredValues = (value) => {
    return value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean).length;
  };

  const updateSelectedFilters = (newSelectedFilters) => {
    const { PageSize, PageNumber, SortBy, SortOrder, ...rest } =
      newSelectedFilters;

    const fieldsToCount = [
      "ServiceProviderType",
      "Stage",
      "Status",
      "PrimaryTrade",
      "SecondaryTrade",
      "TertiaryTrade",
      "ServiceProviderName",
      "CompanyName",
      "DBAName",
      "City",
      "State",
      "ZipCode",
    ];

    let totalCount = 0;

    fieldsToCount.forEach((field) => {
      totalCount += countFilteredValues(rest[field]);
    });

    setTotalFilterCount(totalCount);

    setSelectedFilters({
      ...selectedFilters,
      ...newSelectedFilters,
    });
  };

  return (
    <FiltersDataContext.Provider
      value={{
        filters,
        setFilters,
        userData,
        setUserData,
        currentPage,
        setCurrentPage,
        updateSelectedFilters,
        selectedFilters,
        totalFilterCount,
        setTotalFilterCount,
        setSelectedFilters,
      }}
    >
      {children}
    </FiltersDataContext.Provider>
  );
};
