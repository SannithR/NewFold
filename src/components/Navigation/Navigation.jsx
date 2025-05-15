/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../../icons/Logo";
import "./style.css";

export const Navigation = ({
  iconHome = "/img/icon-home-01.svg",
  shield = "/img/shield-01.svg",
  refreshCw = "/img/refresh-cw-05.svg",
  iconMarketplace = "/img/icon-marketplace-stars.svg",
}) => {
  return (
    <div className="navigation">
      <Logo className="logo-1" />
      <div className="menu-name">
        <div className="menulist">
          <div className="div">
            <div className="frame-2">
              <div className="frame-2">
                <div className="menuitem">
                  <img className="img" alt="Icon home" src={iconHome} />

                  <div className="text-wrapper">Home</div>
                </div>

                <div className="menuitem-2">
                  <img className="img" alt="Mail" src="/img/mail-01.svg" />

                  <div className="text-wrapper">Professional Email</div>
                </div>

                <div className="menuitem-2">
                  <img className="img" alt="Globe" src="/img/globe-01.svg" />

                  <div className="text-wrapper">Domains</div>
                </div>

                <div className="menuitem-2">
                  <img className="img" alt="Server" src="/img/server-01.svg" />

                  <div className="text-wrapper">Hosting</div>
                </div>

                <div className="menuitem-2">
                  <img className="img" alt="Shield" src={shield} />

                  <div className="text-wrapper">Security</div>
                </div>
              </div>

              <img
                className="section-divider"
                alt="Section divider"
                src="/img/section-divider.svg"
              />

              <div className="frame-2">
                <div className="menuitem-2">
                  <img className="img" alt="Refresh cw" src={refreshCw} />

                  <div className="text-wrapper">Renewal Centre</div>
                </div>

                <div className="menuitem-2">
                  <img
                    className="img"
                    alt="Icon marketplace"
                    src={iconMarketplace}
                  />

                  <div className="text-wrapper">Market Place</div>
                </div>

                <div className="menuitem-2">
                  <img
                    className="img"
                    alt="Shopping cart"
                    src="/img/shopping-cart-03.svg"
                  />

                  <div className="text-wrapper">Buy More</div>
                </div>
              </div>
            </div>

            <div className="menuitem-2">
              <img className="img" alt="Log out" src="/img/log-out-04.svg" />

              <div className="text-wrapper">Signout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  iconHome: PropTypes.string,
  shield: PropTypes.string,
  refreshCw: PropTypes.string,
  iconMarketplace: PropTypes.string,
};
