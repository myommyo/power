import React from "react";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import imgC from '../assets/images/temp_nav.png';


const SideBar = () => {
  return (
    <>
      <div class="sideBar">
      <img src={imgC} alt="" />
        <div>
          <Link to={'/'}>Home</Link> <br />
          <Link to={'/sub01'}>Sub01</Link>
        </div>  
      </div>
    </>    

  )
}

export default SideBar