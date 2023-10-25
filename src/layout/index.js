import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 40vh)",
          overflow: "hidden",
          width: "100%",
          marginTop: "275px",
        }}
      >
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
