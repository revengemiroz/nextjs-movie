import React, { useState, useContext } from "react";
import Image from "next/image";
import Switch from "react-switch";

import { SwitchContext } from "../../context/SwitchContext";

import { Main, TextContainer } from "./style";

function index(props) {
  const { checked, setChecked, toggle } = useContext(SwitchContext);

  function handleChange(checked) {
    console.log(checked);
    setChecked(checked);
    toggle();
  }

  return (
    <Main>
      <TextContainer>
        <Image src="/monitor.svg" width={16} height={16} />
        <label>Movie</label>
      </TextContainer>
      <Switch
        className="switch"
        onColor="#006bff"
        offColor="#dbdbdb"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={16}
        height={24}
        width={50}
        onChange={handleChange}
        checked={checked}
      />
      <TextContainer>
        <Image src="/tv.svg" width={16} height={16} />
        <label>TV</label>
      </TextContainer>
    </Main>
  );
}

export default index;
