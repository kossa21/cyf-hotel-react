import React from "react";

const Footer = props => {
  return (
    <ul className="footerUl">
      {props.footerElements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Footer;
