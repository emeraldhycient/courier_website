import React from "react";

function Hero() {
  return (
    <>
      <section
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1592174913908-ab7350422ebe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80"
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                CedaCourier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round hidden">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1635851801927-44c4d1c555af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                CedaCourier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round hidden">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1615287271786-c20bdbe04c24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                CedaCourier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round hidden">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </section>
    </>
  );
}

export default Hero;
