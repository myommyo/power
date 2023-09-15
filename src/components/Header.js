import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Select, MenuItem, Button } from "@mui/material";
import imgB from "../assets/images/temp_util.png";
import BreadCrums from "../components/BreadCrums";


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import SettingsIcon  from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

const Appbar = ({setOpen, handleChange, selectedThemeName, themeArray }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* <AppBar className={(setOpen ? 'sideClose' : 'sideOpen')}> */}

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
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SettingsIcon  color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >                
                <div>테마선택</div>                
              
                <Grid container spacing={2}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                  >
                    {themeArray.map((theme) => (
                      <Grid 
                        item xs={4}
                        value={selectedThemeName}
                        onChange={handleChange}
                        key={theme.name}
                      >
                        <FormControlLabel
                          onChange={handleChange}                   
                          value={theme.name}
                          control={<Radio />}
                          label={theme.name}
                          labelPlacement="bottom"
                        />
                      </Grid>
                    ))}                
                  </RadioGroup>
                </Grid>
                <MenuItem>프로필 편집</MenuItem>
                <MenuItem>로그아웃</MenuItem>
                <IconButton
                  onClick={handleClose}
                >
                  <CloseIcon  color="primary" />
                </IconButton>
              </Menu>
            </div>
            </Box>
        </div>
      </AppBar>
    </>
  );
};

export default Appbar;
