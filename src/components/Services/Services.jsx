/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Services = ({
  className,
  iconsDomains = "/img/icons-domains-1.svg",
  iconsServer = "/img/icons-server-2.svg",
  iconsSecurity = "/img/icons-security.svg",
  iconsSettings = "/img/icons-settings.svg",
  img = "/img/icons-security-1.svg",
}) => {
  return (
    <div className={`services ${className}`}>
      <div className="div-5">
        <img className="img-2" alt="Icons domains" src={iconsDomains} />

        <div className="text-wrapper-5">Domains</div>
      </div>

      <div className="div-6">
        <img className="img-2" alt="Icons server" src={iconsServer} />

        <div className="text-wrapper-5">Hosting</div>
      </div>

      <div className="div-5">
        <img className="img-2" alt="Icons security" src={iconsSecurity} />

        <div className="text-wrapper-5">Security</div>
      </div>

      <div className="div-5">
        <img className="img-2" alt="Icons settings" src={iconsSettings} />

        <div className="text-wrapper-6">Proff. Email</div>
      </div>

      <div className="div-5">
        <img className="img-2" alt="Icons security" src={img} />

        <div className="text-wrapper-7">More</div>
      </div>
    </div>
  );
};

Services.propTypes = {
  iconsDomains: PropTypes.string,
  iconsServer: PropTypes.string,
  iconsSecurity: PropTypes.string,
  iconsSettings: PropTypes.string,
  img: PropTypes.string,
};
