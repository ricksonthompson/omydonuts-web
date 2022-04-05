import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { SidebarData } from "./SidebarData";
import { Container } from "./styles";
const img = require('../../assets/logo-donut-colorful.png')

interface SidebarProps { 
  logoIsActive?: boolean
}

export const SideBar: React.FC<SidebarProps> = ({children, logoIsActive}) => {
  const [sideBar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sideBar);

  return (
    <>
      <Container isActive={sideBar} logoIsVisible={logoIsActive}>
        <IconContext.Provider value={{ color: "#E80B8C", size: "30"}}>
          <div className="navbar">
            <Link to="#"  className="menu-bars">
              <RiIcons.RiMenu4Line onClick={showSidebar} size="30"/>
            </Link>
            <Link to="/" >
              <img src={img} alt="logo" />
            </Link>
          </div>
          <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li className={item.cName} key={index}>
                    <Link to={item.path} onClick={showSidebar}>
                      {<item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </Container>
    </>
  );
}