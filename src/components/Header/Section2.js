import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDialog from "../common/dialog.component";
import StepperComponent from "../common/stepper.component";
import Login from "../../pages/Login/Login";

const Section2 = () => {
  const location = useLocation();
  const link = location.pathname;

  const [activeLink, setActiveLink] = useState(link || "/");
  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (location.pathname.includes(activeLink)) {
      setActiveLink(link);
    }
  }, [location, activeLink, link]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(link === activeLink, "link");

  return (
    <>
      <div class="head">
        <div class="container">
          <div class="navbar-top">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              {/* <div class="navbar-brand logo ">
              <h1>
                <Link onClick={() => handleNavLinkClick("/")} to="/">
                  <span>Journey To Indian Wedding Wonders</span>
                </Link>
              </h1>
            </div> */}
            </div>

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav link-effect-4">
                <li class="first-list" style={{ backgroundColor: "white" }}>
                  <button
                    onClick={handleOpenModal}
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Login
                  </button>
                </li>
              </ul>
              <ul class="nav navbar-nav link-effect-4">
                <li class="first-list" style={{ backgroundColor: "white" }}>
                  <button
                    onClick={handleOpenModal}
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Register
                  </button>
                </li>
              </ul>

              {/* <ul class="nav navbar-nav link-effect-4">
                <li class={`first-list`}>
                  <Link onClick={handleClickOpen} to="" >
                    Host Wedding
                  </Link>
                </li>
              </ul> */}

              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/host_wedding" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/host_wedding")}
                    to="/host_wedding"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Host Wedding
                  </Link>
                </li>
              </ul>

              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/contact" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/contact")}
                    to="/contact"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/blog" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/blog")}
                    to="/blog"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/gallery" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/gallery")}
                    to="/gallery"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>

              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/about" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/about")}
                    to="/about"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    About
                  </Link>
                </li>
              </ul>

              <ul class="nav navbar-nav link-effect-4">
                <li
                  class={`${link === "/" && "active "}first-list`}
                  style={{ backgroundColor: "white" }}
                >
                  <Link
                    onClick={() => handleNavLinkClick("/")}
                    to="/"
                    style={{ backgroundColor: "white", color: "#ff5722" }}
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CustomDialog open={open} setOpen={setOpen} handleClose={handleClose}>
        <StepperComponent />
      </CustomDialog>

      <Login
        open={openModal}
        setOpen={setOpenModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default Section2;
