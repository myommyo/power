import React from "react";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <>
      <div class="sideBar">
        <div>
          <Link to={'/'}>Home</Link> <br />
          <Link to={'/sub01'}>Sub01</Link>
        </div>  
      </div>
    </>    

  )
}

export default SideBar