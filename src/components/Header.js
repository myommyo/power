import React from "react";

import imgA from '../assets/images/temp_breadcrum.png';
import imgB from '../assets/images/temp_util.png';


const Header = () => {
  return (
    <>
    <div class="header">
      <div className="imgA"><img src={imgA} alt="" /></div>
      <div className="imgB"><img src={imgB} alt="" /></div>
    </div>
    </>  
  )
}

export default Header