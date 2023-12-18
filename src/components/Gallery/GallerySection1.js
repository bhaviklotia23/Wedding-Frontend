import React from "react";
import Gallery1 from "../../images/Gallery/gallery1.jpg";
import Gallery2 from "../../images/Gallery/gallery2.jpg";
import Gallery3 from "../../images/Gallery/gallery3.jpg";
import Gallery4 from "../../images/Gallery/gallery4.jpg";
import Gallery5 from "../../images/Gallery/gallery5.jpg";
import Gallery6 from "../../images/Gallery/gallery6.jpg";
import Gallery7 from "../../images/Gallery/gallery7.jpg";
import Gallery8 from "../../images/Gallery/gallery8.jpg";
import Gallery9 from "../../images/Gallery/gallery9.jpg";
import Gallery10 from "../../images/Gallery/gallery10.jpg";
import Gallery11 from "../../images/Gallery/gallery11.jpg";
import Gallery12 from "../../images/Gallery/gallery12.jpg";

const GallerySection1 = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        marginTop: "30px",
      }}
    >
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
              <i
                className="glyphicon glyphicon-remove-circle"
                id="jzBoxClose"
              />
            </div>
          </div>
          <div className="w3ls-gallery-grids">
            <div className="col-md-4 gallery-grid">
              <div className="wpf-demo-4">
                <img src={Gallery1} className="img-responsive" alt=" " />
              </div>
              <div className="wpf-demo-4">
                <img src={Gallery2} alt=" " className="img-responsive" />
              </div>
              <div className="wpf-demo-4">
                <img src={Gallery3} alt=" " className="img-responsive" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 gallery-grid">
              <div className="wpf-demo-4">
                <img src={Gallery4} alt=" " className="img-responsive" />
              </div>
              <div className="wpf-demo-4">
                <img src={Gallery5} alt=" " className="img-responsive" />
              </div>
              <div className="wpf-demo-4">
                <img src={Gallery11} alt=" " className="img-responsive" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 gallery-grid">
              <div className="wpf-demo-4">
                <img src={Gallery6} alt=" " className="img-responsive" />
              </div>
              <div className="wpf-demo-4">
                <img src={Gallery7} alt=" " className="img-responsive" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 gallery-grid">
              <div className="wpf-demo-4">
                <img src={Gallery9} alt=" " className="img-responsive" />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection1;
