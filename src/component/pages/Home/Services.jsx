import React from "react";

function Services() {
  return (
    <section className="mt-5  pt-3">
      <div className="text-center">
        <h4>
          <b>OUR SERVICES</b>
        </h4>
        <hr className="hr" />
      </div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <p>
              Globally known for our ability to handle every last detail of our
              customers’ particular logistics and forwarding needs, CedaCourier
              Special Services team takes care of all your logistics.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <div className="circle mr-2">
                <i className="fa fa-ship fa-2x"></i>
              </div>
              <h6>
                <b>Cargo Delivery</b>
              </h6>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80"
              alt=""
              className="img-fluid h-50 w-100 mt-3"
            />
            <p className="text-muted">
              Our service is founded on the commitment, dedication, and
              professionalism, and we keep to all standard of quality.
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <div className="circle mr-2">
                <i className="fa fa-truck fa-2x text-danger"></i>
              </div>
              <h6>
                <b>Freight Delivery</b>
              </h6>
            </div>
            <img
              src="https://media.istockphoto.com/photos/white-semitrailer-truck-heading-down-a-fourlane-highway-at-dusk-picture-id1289928297?b=1&k=20&m=1289928297&s=170667a&w=0&h=J873qv9Zwpb8qkXlkgjjxljAdFEafPveNs-nbL3ZiXw="
              alt=""
              className="img-fluid h-50 w-100 mt-3"
            />
            <p className="text-muted">
              Our service is founded on the commitment, dedication, and
              professionalism, and we keep to all standard of quality.
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <div className="circle mr-2">
                <i className="fa fa-home fa-2x"></i>
              </div>
              <h6>
                <b>Home Delivery</b>
              </h6>
            </div>
            <img
              src="https://images.unsplash.com/photo-1613329284267-4b59c5a78deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
              alt=""
              className="img-fluid h-50 w-100 mt-3"
            />
            <p className="text-muted">
              Our service is founded on the commitment, dedication, and
              professionalism, and we keep to all standard of quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
