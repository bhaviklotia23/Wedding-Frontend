import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomDialog from "../common/dialog.component";
import StepperComponent from "../common/stepper.component";
import Login from "../../pages/Login/Login";
import { LogOutApi, LoginApi } from "../../api/auth/login";
import { Box, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenuItem from "../common/DropdownMenuItem";



const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },

  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Host wedding",
    path: "/host_wedding",
  },



];

const Section2 = () => {
  const location = useLocation();
  const link = location.pathname;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(link || "/");
  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(false);


  const [openModal, setOpenModal] = useState(false);


  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleNavigate = (path) => {
    handleCloseNavMenu();
    navigate(path);
    setAnchorElNav(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  const LoginData = JSON.parse(localStorage.getItem("userData"));

  const LogOut = async () => {
    try {
      await LogOutApi();

      localStorage.removeItem('userData');
    } catch (error) {
    }
  };


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


            <div className="header-mobile d-flex d-xl-none flex-fill justify-content-between align-items-center" style={{ marginTop: "-30px" }}>
              <Box>
                <MenuIcon
                  onClick={handleOpenNavMenu}
                  sx={{ display: { md: "none", xs: "block" }, color: "rgb(255, 87, 34)" }}
                />
              </Box>


              <Box
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                }}
              >
                <SwipeableDrawer
                  sx={{ display: { xs: "flex", md: "none", xl:"flex" }}}
                  anchor="top"
                  open={anchorElNav}
                  onClose={handleCloseNavMenu}
                  onOpen={handleCloseNavMenu}
                >
                  <Box
                    role="presentation"
                    // onClick={handleCloseNavMenu}
                    onKeyDown={handleCloseNavMenu}
                    sx={{
                      width: "fit-content",
                      marginTop: 2,
                      minWidth: "11rem",
                    }}
                  >
                    <List>
                      {pages?.map((page, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          sx={{
                            fontSize: 15,
                            fontWeight: "bold",
                            marginLeft: "12px",
                          }}
                        >
                          {Array.isArray(page.children) ? (
                            <DropdownMenuItem
                              handleCloseNavMenu={handleCloseNavMenu}
                              title={page.title}
                              items={page.children}
                            />
                          ) : (
                            <ListItemButton
                              onClick={() => handleNavigate(page.path)}
                            >
                              <ListItemText primary={page.title} />
                            </ListItemButton>
                          )}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </SwipeableDrawer>
              </Box>
              {!LoginData?.token ? (
                <ul class="nav navbar-nav link-effect-4" 
                style={{
                  display: "flex",
                  marginTop: "-3px",
                }}>
                  <li class="first-list" style={{ backgroundColor: "white" }}>
                    <button
                      onClick={handleOpenModal}
                      style={{ backgroundColor: "white", color: "#ff5722" }}
                    >
                      Login
                    </button>
                  </li>
                </ul>
              ) :
                <>
                  <ul class="nav navbar-nav link-effect-4">
                    <li class="first-list" style={{ backgroundColor: "white" }}>
                      <button
                        onClick={LogOut}
                        style={{ backgroundColor: "white", color: "#ff5722" }}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </>
              }
            </div>

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >







              {!LoginData?.token ? (
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
              ) :
                <>
                  <ul class="nav navbar-nav link-effect-4">
                    <li class="first-list" style={{ backgroundColor: "white" }}>
                      <button
                        onClick={LogOut}
                        style={{ backgroundColor: "white", color: "#ff5722" }}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </>
              }

              {!LoginData?.token
                ? (
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
                ) : null
              }


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
