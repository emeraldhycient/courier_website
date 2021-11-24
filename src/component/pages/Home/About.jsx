import React from "react";

function About() {
  return (
    <section className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="text-center">
              <h4>
                <b className="primary-text">ABOUT US</b>
              </h4>
              <hr className="hr bg-dark" />
            </div>
            <p className="text-muted">
              All our suppliers undergo a strict evaluation to ensure you only
              work with trustable factories instead of middlemen or dodgy
              workshops. We also update our supplier list after each cooperation
              according to the quality, prices, and lead time. Have you
              encountered any problems in purchasing from China? Are you eager
              to create your own brand/company? Welcome to contact us for any
              needs. We’ll ensure you will partner with excellent suppliers.
            </p>
            <div className="mt-5">
              <div className="d-flex mb-4">
                <i className="fa fa-rocket fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>FAST DELIVERY</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="fa fa-fingerprint fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>SECURED SERVICE</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="fa fa-globe-americas fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>WORLD WIDE SHIPPING</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src="https://img.freepik.com/free-photo/van-white-background-ing_110893-772.jpg?size=626&ext=jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
