import React from "react";

const Education = () => {
  return (
    <div className="container my-5 p-5">
      <div className="row align-items-center p-5">
        {/* Image Column */}
        <div className="col-md-6 text-center">
          <img
            src="images/education.svg"
            alt="Zerodha Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
          <a href="/">
            {" "}
            Explore our product <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* Text Column */}
        <div className="col-md-6 p-5">
          <h2 className="mb-5 mt-3">Free and open market education</h2>

          <p className="text-muted  mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <p className="text-muted mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
