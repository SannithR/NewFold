/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Table = ({
  className,
  divider = "/img/divider.svg",
  filterLines = "/img/filter-lines.svg",
  arrowDown = "/img/arrow-down.svg",
  avatar = "/img/avatar.svg",
  iconsDomains = "/img/icons-domains.svg",
  iconsServer = "/img/icons-server-1.svg",
  img = "/img/icons-server-1.svg",
  avatar1 = "/img/avatar-1.png",
  avatarClassName,
  iconsServerClassName,
  iconsServer1 = "/img/server.svg",
  tableCell = "/img/table-cell.svg",
  tableCell1 = "/img/table-cell-1.svg",
  tableCell2 = "/img/table-cell-2.svg",
  tableCell3 = "/img/table-cell-3-2.svg",
  tableCell4 = "/img/table-cell-4.svg",
  tableCellClassName,
  tableCell5 = "/img/image.svg",
  tableCellClassNameOverride,
  tableCell6 = "/img/table-cell-3.svg",
}) => {
  return (
    <div className={`table ${className}`}>
      <div className="card-header">
        <div className="content">
          <div className="avatar-and-text">
            <div className="div-7">
              <div className="text-and-badge">
                <div className="text">My Products</div>
              </div>
            </div>
          </div>
        </div>

        <img className="divider" alt="Divider" src={divider} />
      </div>

      <div className="filters-bar">
        <div className="content-2">
          <div className="button-group">
            <div className="button-group-base">
              <div className="text-2">All(60)</div>
            </div>

            <div className="button-group-base-2">
              <div className="text-3">Domains(40)</div>
            </div>

            <div className="button-group-base-3">
              <div className="text-3">Hosting(10)</div>
            </div>

            <div className="button-group-base-4">
              <div className="text-3">Professional Email(10)</div>
            </div>
          </div>

          <div className="actions">
            <button className="button">
              <img
                className="filter-lines"
                alt="Filter lines"
                src={filterLines}
              />

              <div className="text-4">Filters</div>
            </button>
          </div>
        </div>
      </div>

      <div className="content-3">
        <div className="column">
          <div className="table-header-cell">
            <div className="table-header">
              <div className="text-5">Domains</div>

              <img className="arrow-down" alt="Arrow down" src={arrowDown} />
            </div>
          </div>

          <div className="table-cell">
            <img className="img-3" alt="Avatar" src={avatar} />

            <div className="text-and-supporting">
              <div className="text-6">Website</div>

              <p className="supporting-text">Expired on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img className="img-3" alt="Icons domains" src={iconsDomains} />

            <div className="text-and-supporting-2">
              <div className="text-6">Peterpaker</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img className="img-3" alt="Icons server" src={iconsServer} />

            <div className="text-and-supporting-2">
              <div className="text-6">Window Server</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img className="img-3" alt="Icons server" src={img} />

            <div className="text-and-supporting-2">
              <div className="text-6">Linux Essential plan</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img className="avatar" alt="Avatar" src={avatar1} />

            <div className="text-and-supporting-3">
              <div className="text-6">Professional Email Package</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img
              className={`avatar-2 ${avatarClassName}`}
              alt="Avatar"
              src="/img/avatar-2.png"
            />

            <div className="text-and-supporting-3">
              <div className="text-6">Professional Email Package</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>

          <div className="table-cell">
            <img
              className={`icons-server ${iconsServerClassName}`}
              alt="Icons server"
              src={iconsServer1}
            />

            <div className="text-and-supporting-2">
              <div className="text-6">Linux Essential plan</div>

              <p className="supporting-text">Expiring on 05 Jan 2025</p>
            </div>
          </div>
        </div>

        <div className="column-2">
          <div className="table-header-cell">
            <div className="table-header">
              <div className="text-5">Status</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge">
              <div className="text-7">Expired</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-2">
              <div className="text-8">Expiring soon</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-3">
              <div className="text-9">Active</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-3">
              <div className="text-9">Active</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-2">
              <div className="text-10">Expiring soon</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-3">
              <div className="text-9">Active</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="badge-3">
              <div className="text-9">Active</div>
            </div>
          </div>
        </div>

        <div className="div-7">
          <div className="table-header-cell">
            <div className="table-header">
              <div className="text-5">Storage Used</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="text-11">NA</div>
          </div>

          <div className="table-cell-2">
            <div className="text-11">NA</div>
          </div>

          <div className="table-cell">
            <div className="progress-bar">
              <div className="progress-wrapper">
                <div className="progress" />
              </div>

              <div className="percentage">30%</div>
            </div>
          </div>

          <div className="table-cell">
            <div className="progress-bar">
              <div className="progress-wrapper">
                <div className="progress-2" />
              </div>

              <div className="percentage">80%</div>
            </div>
          </div>

          <div className="table-cell-2">
            <div className="text-11">NA</div>
          </div>

          <div className="table-cell">
            <div className="progress-bar">
              <div className="progress-wrapper">
                <div className="progress-3" />
              </div>

              <div className="percentage">10%</div>
            </div>
          </div>

          <div className="table-cell">
            <div className="progress-bar">
              <div className="progress-wrapper">
                <div className="progress-4" />
              </div>

              <div className="percentage">40%</div>
            </div>
          </div>
        </div>

        <div className="column-3">
          <div className="table-header-cell">
            <div className="table-header-2">
              <div className="text-5">Auto Renewal</div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="button-wrapper">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>

          <div className="table-cell">
            <div className="toggle">
              <div className="toggle-base">
                <div className="button-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="column-4">
          <div className="table-header-cell-2" />

          <img className="table-cell-3" alt="Table cell" src={tableCell} />

          <img className="table-cell-3" alt="Table cell" src={tableCell1} />

          <img className="table-cell-3" alt="Table cell" src={tableCell2} />

          <img className="table-cell-3" alt="Table cell" src={tableCell3} />

          <img className="table-cell-4" alt="Table cell" src={tableCell4} />

          <img
            className={`table-cell-5 ${tableCellClassName}`}
            alt="Table cell"
            src={tableCell5}
          />

          <img
            className={`table-cell-6 ${tableCellClassNameOverride}`}
            alt="Table cell"
            src={tableCell6}
          />
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  divider: PropTypes.string,
  filterLines: PropTypes.string,
  arrowDown: PropTypes.string,
  avatar: PropTypes.string,
  iconsDomains: PropTypes.string,
  iconsServer: PropTypes.string,
  img: PropTypes.string,
  avatar1: PropTypes.string,
  iconsServer1: PropTypes.string,
  tableCell: PropTypes.string,
  tableCell1: PropTypes.string,
  tableCell2: PropTypes.string,
  tableCell3: PropTypes.string,
  tableCell4: PropTypes.string,
  tableCell5: PropTypes.string,
  tableCell6: PropTypes.string,
};
