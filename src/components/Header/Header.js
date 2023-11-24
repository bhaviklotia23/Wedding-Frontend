import React from "react";
// import Section1 from "../../components/Header/Section1";
import Section2 from "../../components/Header/Section2";
// import Section3 from "../../components/Header/Section3";
import "./section2.css";

const Header = () => {
  return (
    <div>
      <div class="container" style={{ position: "relative" }}>
        <div class="box">
          <div class="fadeIn fadeIn-animated" style={{ position: "absolute" }}>
            <Section2 />
          </div>
        </div>
      </div>

     <div>
        {/* Your header content goes here */}
        {/* <Section1 /> */}
        {/* <Section3 /> */}

        {/* ... */}
      </div>
    </div>
  );
};

export default Header;
