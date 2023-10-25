import React from "react";
import Team1 from "../../images/t1.jpg";
import Team2 from "../../images/t2.jpg";
import Team3 from "../../images/t3.jpg";
import Team4 from "../../images/t4.jpg";

const AboutSection3 = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="w3-heading-grid">
          <h3>Our Team</h3>
          <div className="agileits-border"> </div>
        </div>
        <div className="agile-team-grids">
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src={Team1} className="img-responsive" alt=" " />
              <div className="overlay">
                <h5>voluptatem quia</h5>
                <p>sit aspernatur aut odit</p>
                <div className="w3l-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Filmr Doe</h4>
            <span>Vestibulum</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src={Team2} className="img-responsive" alt=" " />
              <div className="overlay">
                <h5>voluptatem quia </h5>
                <p>sit aspernatur aut odit</p>
                <div className="w3l-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Jaye Smith</h4>
            <span>Aliquam non</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src={Team3} className="img-responsive" alt=" " />
              <div className="overlay">
                <h5>voluptatem quia </h5>
                <p>sit aspernatur aut odit</p>
                <div className="w3l-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Mike Arney</h4>
            <span>Quisque vitae</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src={Team4} className="img-responsive" alt=" " />
              <div className="overlay">
                <h5>voluptatem quia </h5>
                <p>sit aspernatur aut odit</p>
                <div className="w3l-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4>Mary Jane</h4>
            <span>Nulla molestie</span>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
