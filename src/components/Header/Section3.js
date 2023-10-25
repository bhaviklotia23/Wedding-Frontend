import React from "react";

const Section3 = () => {
  return (
    <div className="w3layouts-banner-slider">
      <div className="container">
        <div className="slider">
          <div className="callbacks_container">
            <ul className="rslides callbacks callbacks1" id="slider4">
              <li>
                <div className="agileits-banner-info">
                  <h3>Journey To Indian Wedding Wonders</h3>
                  <p>
                    Etiam ut maximus mauris, eu pretium neque. Donec nibh
                    lectus, blandit id metus non, bibendum dictum quam.
                  </p>
                </div>
              </li>
              <li>
                <div className="agileits-banner-info">
                  <h3>Donec posuere</h3>
                  <p>
                    Sed tempus efficitur ex et elementum. Nulla at diam blandit,
                    posuere dui vel, tempor arcu. Nulla varius.
                  </p>
                  <div className="w3-button">
                    <div className="w3ls-button">
                      <a href="single.html">More</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="agileits-banner-info">
                  <h3>Lorem ipsum</h3>
                  <p>
                    Etiam ut maximus mauris, eu pretium neque. Donec nibh
                    lectus, blandit id metus non, bibendum dictum quam.
                  </p>
                  <div className="w3-button">
                    <div className="w3ls-button">
                      <a href="single.html">More</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="agileits-banner-info">
                  <h3>Donec posuere</h3>
                  <p>
                    Sed tempus efficitur ex et elementum. Nulla at diam blandit,
                    posuere dui vel, tempor arcu. Nulla varius.
                  </p>
                  <div className="w3-button">
                    <div className="w3ls-button">
                      <a href="single.html">More</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="clearfix">
            {/* <script>
    $(function (){" "}
    {$("#slider4").responsiveSlides({
      auto: true,
      pager: true,
      nav: false,
      speed: 500,
      namespace: "callbacks",
      before: function () {
        $(".events").append("<li>before event fired.</li>");
      },
      after: function () {
        $(".events").append("<li>after event fired.</li>");
      },
    })}
    )
  </script> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
