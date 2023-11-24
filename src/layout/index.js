import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <div
          style={{
            display: "block",
            flex: "1 1 auto",
            overflow: "hidden",
            // marginTop: "80px",
            width: "100%",
          }}
          className="main-body-content"
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
