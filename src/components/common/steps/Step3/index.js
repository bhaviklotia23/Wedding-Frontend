import React from "react";
import Step3 from "./Step3";
import { Step3DataProvider } from "../../../../context/Step3Context";

const Main3Step = () => {
  return (
    <>
      <Step3DataProvider>
        <Step3 />
      </Step3DataProvider>
    </>
  );
};

export default Main3Step;
