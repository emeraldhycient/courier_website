import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";
import Map from "../common/Map/Map";

function Contact() {
  let location = useLocation();

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/619e70f66885f60a50bd635d/1fl9eihis";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      <Header />
      <section
        className=""
        style={{ marginTop: "100px", marginBottom: "30px", color: "#23153c" }}
      >
        <center>
          <h4 className="text-center text-uppercase">Contact Us</h4>
          <div className="m-4 shortbar"></div>
        </center>
        <br />
        <br />
        <div className="container mt-5">
          <div className="row" style={{ fontFamily: "sans-serif" }}>
            <div className="col-md-5 mb-5">
              <Map />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 col-lg-6 col-sm-8">
              <div className="bg-dark p-2">
                <h6 className="text-light mb-2">
                  <i className="fa fa-home bg-light text-dark rounded p-2 mr-2"></i>
                  Globally available
                </h6>
                <h6>
                  <i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i>
                  <a
                    href="mailto:support@CedaCourier.com"
                    className="text-light"
                  >
                    support@CedaCourier.com
                  </a>
                </h6>
                <h6>
                  <i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i>
                  <a
                    href="mailto:support@CedaCourier.com"
                    className="text-light"
                  >
                    support@CedaCourier.com
                  </a>
                </h6>
              </div>
              <form
                action=""
                className="form-group bg-light p-3"
                style={{ fontFamily: "sans-serif" }}
              >
                <input
                  type="text"
                  placeholder="Name.."
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  placeholder="Email..."
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  placeholder="Subject.."
                  className="form-control mb-3"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="form-control mb-3"
                ></textarea>
                <button type="submit" className="btn btn-dark mt-2 btn-lg">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
