import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, } from "react-pro-sidebar";

//imported icons from react icons https://react-icons.github.io/react-icons/icons?name=gi
import { FaList, } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { BsFillBarChartFill } from "react-icons/bs";


import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Header = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div style={{ position: "absolute" }} id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "TSR" : "Traffic Sign Recognition"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                <NavLink className="nav-link" to="/input">
                  Input
                </NavLink>
              </MenuItem>
              <MenuItem icon={<BsFillBarChartFill />}>
                <NavLink className="nav-link" to="/output">
                  Output
                  </NavLink>
              </MenuItem>
              {/* <MenuItem icon={<BsFillBarChartFill />}>
                <NavLink className="nav-link" to="/output2">
                  Output 2
                  </NavLink>
              </MenuItem>
              <MenuItem icon={<BsFillBarChartFill />}>
                <NavLink className="nav-link" to="/output3">
                  Output 3
                  </NavLink>
              </MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>

          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;