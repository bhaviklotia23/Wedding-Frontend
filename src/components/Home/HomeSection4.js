import React from "react";
import Img5 from "../../images/5.jpg";
import {
  faCalendarDays,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeSection4 = () => {
  return (
    <div>
      <div class="news">
        <div class="container">
          <div class="w3-heading-grid">
            <h3>News & Events</h3>
            <div class="agileits-border"> </div>
          </div>
          <div class="w3-agileits-news-grids">
            <div class="col-md-6 news-left">
              <div class="w3-agile-news-date">
                <div class="agile-news-icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "#bababa" }}
                  />
                  <p>Nov 24</p>
                </div>
                <div class="agileits-line"> </div>
                <div class="agile-news-icon">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ color: "#bababa" }}
                    />
                  </a>
                  <p>2 Comments</p>
                </div>
                <div class="agileits-line"> </div>
                <div class="agile-news-icon">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{ color: "#bababa" }}
                    />
                  </a>
                  <p>3482</p>
                </div>
              </div>
              <div class="w3-agile-news-img">
                <a href="single.html">
                  <img src={Img5} alt="" />
                </a>
                <h4>
                  <a href="single.html">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames
                  </a>
                </h4>
                <p>
                  Donec justo ante, maximus et aliquam et, elementum ac purus.
                  Nam eget ante ac velit laoreet sodales ut vel nibh. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                  quam nibh. In sed nisi enim. Duis eget nunc vitae elit
                  dignissim feugiat. Morbi molestie fringilla ipsum, id molestie
                  dolor sodales vel.
                </p>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="col-md-6 news-right">
              <div class="news-right-grid">
                <a href="single.html">Nunc non neque ex. Aliquam neque massa</a>
                <h5>06th Nov,2017</h5>
                <p>
                  Ut rutrum convallis erat at malesuada. Donec facilisis sem
                  nisl, ut rhoncus ex ullamcorper ornare. Ut ac interdum velit.
                  Cras nulla nibh, rutrum non venenatis sit amet, ullamcorper
                  venenatis felis.
                </p>
              </div>
              <div class="news-right-grid">
                <a href="single.html">
                  Phasellus sapien eros, condimentum quis
                </a>
                <h5>17th Nov,2017</h5>
                <p>
                  Ut rutrum convallis erat at malesuada. Donec facilisis sem
                  nisl, ut rhoncus ex ullamcorper ornare. Ut ac interdum velit.
                  Cras nulla nibh, rutrum non venenatis sit amet, ullamcorper
                  venenatis felis.
                </p>
              </div>
              <div class="news-right-grid">
                <a href="single.html">
                  Donec justo ante, maximus et aliquam et
                </a>
                <h5>29th Nov,2017</h5>
                <p>
                  Ut rutrum convallis erat at malesuada. <br />
                  Donec facilisis sem nisl, ut rhoncus ex ullamcorper ornare. Ut
                  ac interdum velit. Cras nulla nibh, rutrum non venenatis sit
                  amet, ullamcorper venenatis felis.
                </p>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
