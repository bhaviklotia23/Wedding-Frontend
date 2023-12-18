import React from "react";

import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 40vh)",
        overflow: "hidden",
        width: "100%",
        marginTop: "275px",
      }}
    >
      <div class="footer-bottom">
        <div class="container">
          <div class="w3agile_footer_grids">
            <div class="col-md-3 w3agile_footer_grid">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#ffffff" }}
                  />{" "}
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: "#ffffff",
                    }}
                  />{" "}
                  <a href="mailto:example@email.com">mail@example.com</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff" }}
                  />{" "}
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3agile_footer_grid w3agile_footer_grid1">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="about.html">About</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="icons.html">Icons</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="codes.html">Short Codes</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "white" }}
                  />{" "}
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3agile_footer_grid">
              <h3>Newsletter</h3>
              <p>Subscribe With Us</p>
              <form action="#" method="post">
                <input
                  type="email"
                  placeholder="Subscribe"
                  name="Subscribe"
                  required=""
                />
                <button class="btn1">Go</button>
              </form>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <p>
            © 2017 Wedding Plan. All rights reserved | Design by{" "}
            <a href="http://w3layouts.com">W3layouts</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
