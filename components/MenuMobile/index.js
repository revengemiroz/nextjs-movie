import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

import SearchBar from "../SearchBar";
import Sidebar from "../Sidebar";

import { Container, Hamburger, Bar } from "./style";

var styles = {
  bmBurgerButton: {
    display: "none",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    marginRight: "1rem",
  },
  bmCross: {
    background: "#fafafa",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 99999,
  },
  bmMenu: {
    background: "#263238",
    overflowY: "scroll",
    padding: "2.5em 1.5em",
  },
  bmItemList: {
    color: "#fafafa",
    padding: "0.8rem",
  },
  bmItem: {
    outline: "none",
  },
  bmOverlay: {
    top: 0,
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function index() {
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };

  return (
    <>
      <Container>
        <Hamburger onClick={() => setisOpened(true)}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        <SearchBar />
      </Container>
      <Menu isOpen={isOpened} onStateChange={isMenuOpen} styles={styles}>
        <Sidebar />
      </Menu>
    </>
  );
}

export default index;
