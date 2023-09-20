import React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack, MenuItem, Avatar, Typography, Divider } from "@mui/material";
import BreadCrums from "../components/BreadCrums";

import { IoSettingsOutline } from "react-icons/io5";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

const Appbar = ({ setOpen, handleChange, selectedThemeName, themeArray }) => {
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
          <Stack direction="row" alignItems="center" sx={{ pr: 12 }}>
            <Stack direction="row" alignItems="center">
              <Avatar alt="Admin" src="/static/images/avatar/1.jpg" sx={{ width: 36, height: 36, mr: 3 }} />
              <Typography variant="subTitle2" sx={{ color: "text.primary", fontWeight: "500" }}>
                파워젠
              </Typography>
              <Divider sx={{ height: 11, mx: 3 }} orientation="vertical" />
              <Typography variant="subTitle2" sx={{ color: "common.textColor2", fontWeight: "400" }}>
                ADMIN
              </Typography>
            </Stack>
            <div>
              <IconButton disableRipple size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="text.main">
                <IoSettingsOutline sx={{}} />
              </IconButton>
              <Menu
                className="headerMenu"
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  top: "48px",
                }}
              >
                <Typography variant="subTitle2">테마선택</Typography>

                <Stack spacing={2} sx={{ width: "100%", m: 0, mt: 5 }}>
                  <RadioGroup className="acountMenu" row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top" sx={{ width: "100%" }}>
                    {themeArray.map((theme) => (
                      <Stack item xs={4} value={selectedThemeName} onChange={handleChange} key={theme.name}>
                        <FormControlLabel onChange={handleChange} value={theme.name} control={<Radio disableRipple />} label={theme.name} labelPlacement="bottom" />
                      </Stack>
                    ))}
                  </RadioGroup>
                </Stack>

                <MenuItem
                  sx={{
                    border: "1px solid #d9d9d9",
                    fontSize: "15px",
                    color: "#3e5382",
                    justifyContent: "center",
                    height: "40px",
                    borderRadius: "4px",
                    mt: 6,
                    mb: 3,
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  프로필 편집
                </MenuItem>
                <MenuItem
                  sx={{
                    border: "1px solid #d9d9d9",
                    fontSize: "15px",
                    color: "#ff0000",
                    justifyContent: "center",
                    height: "40px",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  로그아웃
                </MenuItem>
                <IconButton
                  disableRipple
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: "-26px",
                    right: "-24px",
                  }}
                >
                  <CloseIcon color="primary" />
                </IconButton>
              </Menu>
            </div>
          </Stack>
        </div>
      </AppBar>
    </>
  );
};

export default Appbar;
