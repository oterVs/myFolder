import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{ fontStyle: "italic", margin: "5px" }}>By Otter</p>
      <img
        alt=""
        style={{ width: "40px" }}
        src="https://i.pinimg.com/originals/6c/c3/47/6cc3475f1678c3acb10fec23b1d6298b.png"
      />
    </div>
  );
};

export default Footer;
