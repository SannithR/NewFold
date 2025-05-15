/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Search } from "../Search";
import { Widget } from "../Widget";
import "./style.css";

export const Side = ({
  searchSearch = "/img/search.svg",
  searchSearchLg = "/img/search-lg.svg",
}) => {
  return (
    <div className="side">
      <Search
        className="search-instance"
        search={searchSearch}
        searchLg={searchSearchLg}
      />
      <Widget className="widget-instance" />
    </div>
  );
};

Side.propTypes = {
  searchSearch: PropTypes.string,
  searchSearchLg: PropTypes.string,
};
