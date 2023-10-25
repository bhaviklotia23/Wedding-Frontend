import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
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
          <div class="navbar-brand logo ">
            <h1>
              <Link to="/">
                Wedding <span>Plan</span>
              </Link>
            </h1>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav link-effect-4">
            <li class="active first-list">
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
          <ul class="nav navbar-nav link-effect-4">
            <li class=" first-list">
              <Link to="/">Home</Link>{" "}
            </li>
          </ul>
          <ul class="nav navbar-nav link-effect-4">
            <li class=" first-list">
              <Link to="/blog">Blog</Link>{" "}
            </li>
          </ul>

          <ul class="nav navbar-nav link-effect-4">
            <li class=" first-list">
              <Link to="/gallery">Gallery</Link>{" "}
            </li>
          </ul>

          <ul class="nav navbar-nav link-effect-4">
            <li class=" first-list">
              <Link to="/about">About</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
