import React from "react";
import home from "../../images/home.jpeg";

function Testimony() {
  return (
    <section className="mt-5  pt-3">
      <div className="text-center">
        <h4>
          <b className="primary-text">TESTIMONIALS</b>
        </h4>
        <hr className="hr bg-dark" />
      </div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1595054225874-7d2315262e73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt=""
              className="img-fluid mb-2"
            />
            <h4 className="primary-text">
              <b>James clinton</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              This company is not like your regular courier company, it’s the
              real meaning of teamwork, a gift for us to enjoy.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <img src={home} alt="" className="img-fluid mb-2" />
            <h4 className="primary-text">
              <b> Luke Hannah</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              I’ve tried a lot of courier company, all on same ground, Now you
              can say bye-bye to delayed delivery, CedaCourier is changing the
              story everyday.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
              alt=""
              className="img-fluid mb-2"
            />
            <h4 className="primary-text">
              <b>Steve Jonathan</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              CedaCourier is not just a company, it’s a team, a big one indeed,
              that consists of a network of hardworking men and women .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
