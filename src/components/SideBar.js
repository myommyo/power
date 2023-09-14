import React from "react";
import { Link } from 'react-router-dom';
import imgC from '../assets/images/temp_nav.png';
import imgD from '../assets/images/btn_toggle.png';


const SideBar = ({setOpen}) => {
  return (
    <>
      {/* <div className={"sideBar " + (setOpen ? 'sideClose' : 'sideOpen')}> */}
      <div className="sideBar">
        <img src={imgC} alt="" />
        <div className="imgD">
          <img src={imgD} alt="" />
        </div>
        {/* <div>
          <Link to={'/'}>Home</Link> <br />
          <Link to={'/sub01'}>Sub01</Link>
        </div>   */}
      </div>
    </>    

  )
}

export default SideBar