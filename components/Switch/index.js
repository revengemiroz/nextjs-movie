import React, { useState, useContext } from "react";
import Switch from "react-switch";

import { SwitchContext } from "../../context/SwitchContext";

import { Main } from "./style";

function index(props) {
  const { checked, setChecked, toggle } = useContext(SwitchContext);

  function handleChange(checked) {
    console.log(checked);
    setChecked(checked);
    toggle();
  }

  return (
    <Main>
      <label>Movie</label>
      <Switch
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
      <label>TV</label>
    </Main>
  );
}

export default index;
