import React from "react";
import { Circle } from "../../components/Circle";
import { Frame } from "../../components/Frame";
import { Navigation } from "../../components/Navigation";
import { Services } from "../../components/Services";
import { Side } from "../../components/Side";
import { Table } from "../../components/Table";
import "./style.css";

export const NewScreen = () => {
  return (
    <div className="new-screen">
      <div className="frame-wrapper-2">
        <div className="frame-19">
          <Navigation
            iconHome="/img/icon-home-01-1.svg"
            iconMarketplace="/img/icon-marketplace-stars-1.svg"
            refreshCw="/img/refresh-cw-05-1.svg"
            shield="/img/shield-01-1.svg"
          />
          <div className="frame-20">
            <Frame
              className="frame-37071"
              ioniconN="/img/ionicon-n-notifications-outline-2.svg"
            />
            <div className="frame-21">
              <div className="frame-22">
                <img className="banner" alt="Banner" src="/img/banner.svg" />

                <Circle className="CIRCLE-instance" />
                <div className="frame-23">
                  <div className="text-wrapper-21">Quick Links</div>

                  <Services
                    className="services-1"
                    iconsDomains="/img/icons-domains-2.svg"
                    iconsSecurity="/img/icons-security-2.svg"
                    iconsServer="/img/icons-server-3.svg"
                    iconsSettings="/img/icons-settings-1.svg"
                    img="/img/icons-security-3.svg"
                  />
                </div>

                <Table
                  arrowDown="/img/arrow-down-1.svg"
                  avatar="/img/avatar-3.svg"
                  avatar1="/img/avatar-4.png"
                  avatarClassName="design-component-instance-node"
                  className="table-instance"
                  divider="/img/divider-1.svg"
                  filterLines="/img/filter-lines-1.svg"
                  iconsDomains="/img/icons-domains-3.svg"
                  iconsServer="/img/icons-server-5.svg"
                  iconsServer1="/img/server-2.svg"
                  iconsServerClassName="table-2"
                  img="/img/icons-server-5.svg"
                  tableCell="/img/table-cell-5-2.svg"
                  tableCell1="/img/table-cell-6-2.svg"
                  tableCell2="/img/table-cell-7.svg"
                  tableCell3="/img/table-cell-8.svg"
                  tableCell4="/img/table-cell-9.svg"
                  tableCell5="/img/table-cell-5.svg"
                  tableCell6="/img/table-cell-6.svg"
                  tableCellClassName="table-3"
                  tableCellClassNameOverride="table-4"
                />
              </div>

              <Side
                searchSearch="/img/search-2.svg"
                searchSearchLg="/img/search-lg-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
