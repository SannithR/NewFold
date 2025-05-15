/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Search = ({
  className,
  search = "/img/search-1.svg",
  searchLg = "/img/search-lg-1.svg",
}) => {
  return (
    <div className={`search ${className}`}>
      <div className="ellipse-2" />

      <div className="frame-3">
        <div className="frame-4">
          <img
            className="trend-up"
            alt="Trend up"
            src="/img/trend-up-01-1.svg"
          />

          <div className="text-wrapper-8">Boost</div>
        </div>

        <p className="your-business-with-a">
          <span className="span">Your Business </span>

          <span className="text-wrapper-9">With a Better</span>

          <span className="text-wrapper-10"> </span>

          <span className="span">Domain</span>
        </p>
      </div>

      <div className="frame-5">
        <div className="frame-6">
          <img className="img-4" alt="Search" src="/Public/assets/search.png" />

          <div className="text-wrapper-11">Search domain...</div>
        </div>

        <button className="BUTTON">
          <div className="shop-now">SEARCH</div>

          <img className="search-lg" alt="Search lg" src={searchLg} />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  searchLg: PropTypes.string,
};
