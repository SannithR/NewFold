// import React from "react";
// import {  Navigation  } from "../../components/Navigation"
// import {  Services  } from "../../components/Services"
// import {  Side  } from "../../components/Side"
// import {  Table  } from "../../components/Table"
// import banner from "../../../Public/assets/banner.svg";
// import "./style.css";

// export const Frame = () => {
//   return (
//     <div className="final">
//       <Navigation
//         iconHome="/img/icon-home-01-1.svg"
//         iconMarketplace="/img/icon-marketplace-stars-1.svg"
//         refreshCw="/img/refresh-cw-05-1.svg"
//         shield="/img/shield-01-1.svg"
//       />
//       <div className="content">
//         <img className="banner" alt="Banner" src={banner} />
//         <div className="quick-links">
//           <div className="text-wrapper">Quick Links</div>
//           <Services
//             iconsDomains="/img/icons-domains-2.svg"
//             iconsSecurity="/img/icons-security-2.svg"
//             iconsServer="/img/icons-server-3.svg"
//             iconsSettings="/img/icons-settings-1.svg"
//             img="/img/icons-security-3.svg"
//           />
//         </div>
//         <Table />
//       </div>
//       <Side searchSearch="Your BusinessWith a BetterDomain" />
//     </div>
//   );
// };
import React from "react";
import { Navigation } from "../../components/Navigation";
import { Services } from "../../components/Services";
import { Side } from "../../components/Side";
import { Table } from "../../components/Table";
import banner from "../../../Public/assets/banner.svg";
import "./style.css";

export const Frame = () => {
  return (
    <div className="final">
      <div className="frame-wrapper">
        <div className="frame">
          <Navigation
            iconHome="/img/icon-home-01-1.svg"
            iconMarketplace="/img/icon-marketplace-stars-1.svg"
            refreshCw="/img/refresh-cw-05-1.svg"
            shield="/img/shield-01-1.svg"
          />
          <div className="content">
            <img className="banner" alt="Banner" src={banner} />

            <div className="circle-indicators">
              <div className="oval" />
              <div className="oval-2" />
              <div className="oval-3" />
              <div className="oval-4" />
            </div>

            <div className="quick-links">
              <div className="text-wrapper">Quick Links</div>
              <Services
                iconsDomains="/img/icons-domains-2.svg"
                iconsSecurity="/img/icons-security-2.svg"
                iconsServer="/img/icons-server-3.svg"
                iconsSettings="/img/icons-settings-1.svg"
                img="/img/icons-security-3.svg"
              />
            </div>

            <Table />
          </div>

          <Side searchSearch="Your Business With a Better Domain" />
        </div>
      </div>
    </div>
  );
};


