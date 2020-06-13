import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <ul class="footerUl">
      {props.footerElements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Footer;
