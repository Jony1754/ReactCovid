import React from "react";
import "../assets/styles/SearchSelect.scss";
export const Option = ({ value }) => {
  return <option value={value}>{value}</option>;
};
export default Option;
