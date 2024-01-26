import React from "react";
import {
  faBell,
  faAnchor,
  faBook,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardCom from "../common/card/CardCom";
import { Button } from "@mui/material";

const HomeSection3 = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 40vh)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div>
        <div class="popular-section-wthree jarallax">
          <div class="agileinfo-dot">
            <div class="container">
              <div class="w3-heading-grid popular-heading">
                <h3>Upcoming Weddings</h3>
                <div class="agileits-border"> </div>
              </div>
              <div class="popular-agileinfo">
                <CardCom />
                {/* <div class="col-md-3 popular-grid">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ color: "#ffffff" }}
                    aria-hidden="true"
                  />
                  <h4>Sed tempus</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus
                    reiciendis maiores hasellus
                  </p>
                </div>
                <div class="col-md-3 popular-grid">
                  <FontAwesomeIcon
                    icon={faAnchor}
                    style={{ color: "#ffffff" }}
                  />
                  <h4>Nulla varius</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus
                    reiciendis maiores hasellus
                  </p>
                </div>
                <div class="col-md-3 popular-grid popular-grid-bottom">
                  <FontAwesomeIcon icon={faBook} style={{ color: "#ffffff" }} />
                  <h4>Morbi tempus</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus
                    reiciendis maiores hasellus
                  </p>
                </div>
                <div class="col-md-3 popular-grid">
                  <FontAwesomeIcon icon={faCar} style={{ color: "#ffffff" }} />
                  <h4>Lorem ipsum</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus
                    reiciendis maiores hasellus
                  </p>
                </div> */}
                <div class="clearfix"> </div>
              </div>
              <div class="popular-agileinfo">
                <Button variant="contained" sx={{ borderRadius: "20px" }}>
                  See All Upcoming Weddings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
