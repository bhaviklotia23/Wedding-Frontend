import React from "react";
import AboutImage from "../../images/6.jpg";

const AboutSection1 = () => {
  return (
    <div
    style={{
      overflow: "hidden",
      width: "100%",
      marginTop: "100px",
    }}
    >
      <div className="container">
        <div className="w3ls-about-info">
          <img src={AboutImage} alt="" />
          <p>
            Praesent dignissim, nisi vel tristique convallis, urna nunc iaculis
            nunc, eu volutpat massa quam ac dolor. Proin lacinia in nibh eget
            maximus. Suspendisse vitae mi porttitor, varius nulla a, eleifend
            nisl. Etiam porta ut mauris a aliquam. Cras pellentesque elementum
            eros, eget tristique velit malesuada in. Phasellus diam ligula,
            molestie sed porta et, aliquam ut ante. Vivamus gravida nec risus et
            euismod. Maecenas pharetra arcu in vehicula ornare. Duis faucibus
            vehicula purus. Quisque vel neque vestibulum, tempus purus quis,
            porta erat. Aliquam nec pharetra sapien. Etiam gravida porta tortor,
            sit amet maximus purus tempus non. Integer egestas lobortis
            interdum. Curabitur sit amet eleifend velit, quis ultrices quam.
            Nullam tincidunt justo id magna condimentum, eu rhoncus eros
            tincidunt. Aenean ultrices dui ac blandit finibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
