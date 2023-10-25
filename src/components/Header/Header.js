import React from "react";
import Section1 from "../../components/Header/Section1";
import Section2 from "../../components/Header/Section2";
import Section3 from "../../components/Header/Section3";

const Header = () => {
  return (
    <div
      className="banner jarallax"
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        transition: "transform 0s linear -1ms",
        // visibility: "hidden",
        zIndex: " -100",
      }}
    >
      {/* Your header content goes here */}
      <Section1 />
      <Section2 />
      <Section3 />

      {/* ... */}
    </div>
  );
};

export default Header;
