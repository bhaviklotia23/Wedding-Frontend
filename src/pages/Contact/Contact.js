import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 40vh)",
        overflow: "hidden",
        width: "100%",
        marginTop: "110px",
      }}
    >
      <div class="contact-top">
        <div class="container">
          <div class="contact-grids">
            <div class="col-md-7 contact-form">
              <form action="#" method="post">
                <input type="text" name="Name" placeholder="Name" required="" />
                <input
                  type="email"
                  class="email"
                  name="Email"
                  placeholder="Email"
                  required=""
                />
                <textarea
                  placeholder="Message"
                  name="Message"
                  required=""
                ></textarea>
                <input type="submit" value="SUBMIT" />
              </form>
            </div>
            <div class="col-md-4 contact-right">
              <div class="contact-text">
                <h4>Working Hours :</h4>
                <p> Monday – Saturday 5:00 a.m – 9:00 p.m </p>
                <p> Sunday 10 a.m – 4 p.m </p>
                <p>
                  <span class="glyphicon glyphicon-earphone"></span> +11 999
                  8888 7777{" "}
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

export default Contact;
