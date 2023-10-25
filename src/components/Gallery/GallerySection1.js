import React from "react";
import Gallery1 from "../../images/g1.jpg";
import Gallery2 from "../../images/g2.jpg";
import Gallery3 from "../../images/g3.jpg";
import Gallery4 from "../../images/g4.jpg";
import Gallery5 from "../../images/g5.jpg";
import Gallery6 from "../../images/g6.jpg";
import Gallery8 from "../../images/g8.jpg";

const GallerySection1 = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div id="jzBox" className="jzBox">
          <div id="jzBoxNextBig" />
          <div id="jzBoxPrevBig" />
          <img src="#" id="jzBoxTargetImg" alt />
          <div id="jzBoxBottom">
            <div id="jzBoxTitle" />
            <div id="jzBoxCounter" />
            <span id="jzBoxMoreItems">
              <i className="glyphicon glyphicon-menu-left" id="jzBoxPrev" />
              {"{"}" "{"}"}
              &nbsp;
              <i className="glyphicon glyphicon-menu-right" id="jzBoxNext" />
              {"{"}" "{"}"}
              &nbsp;
            </span>
            <i className="glyphicon glyphicon-remove-circle" id="jzBoxClose" />
          </div>
        </div>
        <div className="w3ls-gallery-grids">
          <div className="col-md-4 gallery-grid">
            <div className="wpf-demo-4">
              <a
                href="images/g1.jpg"
                className="jzBoxLink item-hover"
                title="Maecenas sodales tortor ac ligula ultrices dictum et quis urna."
              >
                <img src={Gallery1} className="img-responsive" alt=" " />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="wpf-demo-4">
              <a
                href="images/g2.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery2} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="wpf-demo-4">
              <a
                href="images/3.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery3} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="col-md-4 gallery-grid">
            <div className="wpf-demo-4">
              <a
                href="images/g3.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery4} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="wpf-demo-4">
              <a
                href="images/g4.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery5} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="col-md-4 gallery-grid">
            <div className="wpf-demo-4">
              <a
                href="images/g6.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery6} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="wpf-demo-4">
              <a
                href="images/g8.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery8} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="wpf-demo-4">
              <a
                href="images/g5.jpg"
                className="jzBoxLink item-hover"
                title="Etiam pulvinar metus neque eget porttitor massa."
              >
                <img src={Gallery5} alt=" " className="img-responsive" />
                <div className="view-caption">
                  <p>Click Here</p>
                </div>
              </a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection1;
