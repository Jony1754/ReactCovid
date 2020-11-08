import React from "react";
import "../assets/styles/SearchSelect.scss";

const Select = ({ children }) => {
  return <select className="select">{children}</select>;
};

export default Select;
