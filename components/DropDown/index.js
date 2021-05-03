import React from "react";
import Select from "react-select";

const colourStyles = {
  placeholder: (styles) => ({
    ...styles,
    color: "#000",
    fontSize: " 14px",
    fontWeight: 300,
    letterSpacing: "1.1px",
    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI'",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#aaa",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
    cursor: "pointer",
    color: "red",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    cursor: "pointer",
    fontSize: "1.65rem",
    paddingLeft: "10px",
  }),
  menu: ({ width, ...css }) => ({
    ...css,
    width: "100%",
  }),
  option: (css, state) => ({
    ...css,
    padding: "4px 12px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "15px",
    color: state.isSelected ? "white" : "#7d889f",
    fontWeight: "400",

    ":hover": {
      color: "#54b6f2",
      transition: "0.2s linear",
    },

    ":checked": {
      color: "white",
    },
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#3db4f2",
      color: "white",
      borderRadius: "5px",
      paddingLeft: "5px",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: 400,
  }),
};
const index = ({ ...props }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Select styles={colourStyles} isSearchable={false} {...props} />
    </div>
  );
};

export default index;
