import React from "react";

import imgB from "../assets/images/temp_util.png";
import BreadCrums from "../components/BreadCrums";

const Header = () => {
  return (
    <>
      <div class="header">
        <BreadCrums />
        <div className="imgB">
          <img src={imgB} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
