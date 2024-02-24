import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import saveethalogo from "../../assets/logo.webp";
// import dresteinLogo from "../../assets/dresteinLogo.svg";
import Mobilenav from "./Mobilenav";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import "./styles/HambBurger.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = styled.nav`
  color: rgb(255, 255, 255);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(10px);
  padding-bottom: 1rem;
  border-radius: 0 0 10px 10px;
  z-index: 1000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0 0 1rem;
  width: 100%;
  position: sticky;
  top: 0;
  @media screen and (max-width: 600px) {
    top: -80px;
    flex-direction: column;
    gap: 20px;
    padding-left: 0;
  }
`;

const SLogo = styled.img`
  width: 35%;
  height: auto;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const DLogo = styled.img`
  width: 20%;
  margin-right: 10px;
  animation: ${rotate} 7s infinite linear;
  transform-origin: center;
  @media screen and (max-width: 600px) {
    width: 16%;
  }
`;
const LogoHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-left: 3rem;
  }
`;

const EventLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  @media screen and (max-width: 600px) {
  }
`;
const DresteinLetter = styled.p`
  font-size: 2.2vw;
  font-family: "Azonix", sans-serif;
  letter-spacing: 1.5px;
  color: rgb(255, 255, 255);
  align-self: center;
  text-align: center;
  height: auto;
  @media screen and (max-width: 600px) {
    font-size: 7vw;
  }
`;
const Year = styled.p`
  font-size: 1vw;
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  color: rgb(255, 255, 255);
  text-align: center;
  height: auto;
  letter-spacing: 0.8em;
  margin-left: 1.5em;
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;
const NavHead = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const NavItem = styled.a`
  color: #fff;
  text-transform: uppercase;
  font-size: 1.3vw;
  cursor: pointer;
  text-decoration: none;
`;
const MobileNavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  align-self: flex-start;
`;

function Nav() {
  const navstyle = {
    "@media (maxWidth: 500px)": {
      top: "-80px",
    },
  };
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar className="navbar" style={navstyle}>
      {/* <SLogo src={saveethalogo} /> */}
      <NavHead>
        <Link style={{ textDecoration: "inherit" }} to="/#">
          <NavItem>Home</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/#Departments">
          <NavItem>PRE sites</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/Events#">
          <NavItem>Events</NavItem>
        </Link>
        <Link style={{ textDecoration: "inherit" }} to="/form#">
          <NavItem>Register you sites</NavItem>
        </Link>
      </NavHead>
      <Mobilenav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="icon" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <CgClose /> : <HiOutlineMenuAlt1 />}
      </div>
      <MobileNavHeader>
        <Link to="/#" style={{ "text-decoration": "none" }}>
          <LogoHead>
            {/* <DLogo src={dresteinLogo} alt="DresteinLogo" /> */}
            <EventLogo>
              <DresteinLetter color="red">WLAWG</DresteinLetter>
              <Year>sites</Year>
            </EventLogo>
          </LogoHead>
        </Link>
      </MobileNavHeader>
    </Navbar>
  );
}

export default Nav;
