import React from "react";
import Img1 from "../../images/3.jpg";
import Section3 from "../Header/Section3";

const HomeSection1 = () => {
  return (
    <>
   <div
    style={{
      minHeight: "calc(100vh - 40vh)",
      overflow: "hidden",
      width: "100%",
      marginTop: "640px",
    }}
    >

      <Section3 />
      <div class="welcome">
        <div class="container">
          <div class="w3-heading-grid" style={{marginTop:"160px"}}>
            <h3 style={{ fontSize: "30px" }}>
              Welcome to the mesmerizing realm of <br />
              "Journey to Indian Wedding Wonders"!{" "}
            </h3>
            <div class="agileits-border"> </div>
            <p style={{ fontSize: "18px" }}>
              Step into a world where dreams come to life, and cultures unite in
              the celebration of love and togetherness. At "Journey to Indian
              Wedding Wonders," Prepare to be captivated by the sheer grandeur
              and beauty of Indian weddings like never before. Our mission is to
              invite you on an extraordinary voyage through the kaleidoscope of
              cultures that converge in the heart of India during these joyous
              unions.our mission is to transport you to the heart of Indian
              wedding extravaganzas, where traditions, colors, and joyous
              festivities collide in a symphony of beauty and splendor. Your
              extraordinary journey starts here!
            </p>
          </div>
          <div class="w3l-welcome-grids">
            <div class="col-md-5 w3ls-welcome-left">
              <img src={Img1} alt="" />
            </div>
            <div class="col-md-7 w3ls-welcome-right">
              <h4>At "Journey to Indian Wedding Wonders",</h4>
              <p style={{ color: "black" }}>
                We don't just showcase weddings, We offer you an immersive
                experience in a world of diverse customs, age-old traditions,
                and boundless euphoria. Whether you're a globe-trotter yearning
                for authentic cultural encounters, a couple planning your own
                unforgettable wedding, or someone seeking inspiration, our
                platform is your golden ticket to a realm of spellbinding
                celebrations.
                <h5
                  style={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "#ff5722",
                  }}
                >
                  Step into a world of magic, extravagance, and cultural marvels
                  that define Indian weddings !!
                </h5>
              </p>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default HomeSection1;
