import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Select, MenuItem } from "@mui/material";
import imgB from "../assets/images/temp_util.png";
import BreadCrums from "../components/BreadCrums";

const Appbar = ({handleChange, selectedThemeName, themeArray }) => {
  console.log(themeArray);
  return (
    <>
      <AppBar>
        <div class="header">
          <BreadCrums />
          <div className="imgB">
            <img src={imgB} alt="" />
          </div>
          <Box
                sx={{
                  width: "200px",
                }}
              >
                <Select
                  autoWidth
                  value={selectedThemeName}
                  onChange={handleChange}
                >
                  
                  {themeArray.map((theme) => (
                    <MenuItem key={theme.name} value={theme.name}>
                      {theme.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
        </div>
      </AppBar>
    </>
  );
};

export default Appbar;
