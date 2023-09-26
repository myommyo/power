import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import { PiDotsThreeVerticalBold, PiClockLight } from "react-icons/pi";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
const ResponsiveGridLayout = WidthProvider(Responsive);

function layoutGrid() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  //ReactGridLayout = require('react-grid-layout');`
  const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 2, minH: 2 },
    { i: "b", x: 4, y: 0, w: 4, h: 2, minH: 2 },
    { i: "c", x: 8, y: 0, w: 4, h: 2, minH: 2 },
    { i: "d", x: 0, y: 2, w: 6, h: 3 },
    { i: "e", x: 6, y: 2, w: 6, h: 3 },
  ];

  return (
    <div id="container">
      <ResponsiveGridLayout margin={[20, 20]} className="layout" layouts={{ lg: layout }} breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }}>
        <div key="a">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: "1", position: "relative" }}>
            <Typography variant="font18" sx={{ fontWeight: "500" }}>
              부서별 아이디어 제안
            </Typography>
            <IconButton
              aria-label="Close"
              disableRipple
              aria-controls="menu-comment"
              aria-haspopup="true"
              sx={{
                position: "absolute",
                top: "-6px",
                right: "-20px",
              }}
            >
              <PiDotsThreeVerticalBold color="text.secondary" />
            </IconButton>
            {/* <Menu
              id="menu-comment"
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
                "& .MuiMenu-paper": {
                  borderRadius: "24px !important",
                  minWidth: 152,
                  boxSizing: "border-box",
                  px: 6,
                  pt: 9,
                },
                "& .MuiList-root": {
                  p: 0,
                  pb: 6,
                },
                "& .MuiList-root > li": {
                  background: "#fff",
                  p: 0,
                },
              }}
            >
              <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                대댓글
              </MenuItem>
              <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                공감
              </MenuItem>
              <MenuItem disableRipple disableGutters sx={{ fontSize: 16 }}>
                삭제
              </MenuItem>

              <IconButton
                disableRipple
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: "-31px",
                  right: "-17px",
                }}
              >
                <CloseIcon color="primary" />
              </IconButton>
            </Menu> */}
          </Stack>
          <Stack justifyContent="space-between" sx={{ flex: "1 1 auto", height: "100%", pt: 6 }}>
            <Stack>
              <Typography variant="subTitle1" sx={{ pb: 2 }}>
                총 아이디어 건수
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                    color: "common.textColor1",
                    margin: "-2px 6px 0 0",
                  },
                }}
              >
                <PiClockLight />
                <Typography color="common.textColor1">2023.01 - 2023.06</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ pb: 3 }}>
              <Typography variant="gridNumbs">48</Typography>
              <Typography variant="gridNumbsText" color="primary.main">
                건
              </Typography>
            </Stack>
          </Stack>
        </div>
        <div key="b">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: "1", position: "relative" }}>
            <Typography variant="font18" sx={{ fontWeight: "500" }}>
              비용
            </Typography>
            <IconButton
              aria-label="Close"
              disableRipple
              aria-controls="menu-comment"
              aria-haspopup="true"
              sx={{
                position: "absolute",
                top: "-6px",
                right: "-20px",
              }}
            >
              <PiDotsThreeVerticalBold color="text.secondary" />
            </IconButton>
          </Stack>
          <Stack justifyContent="space-between" sx={{ flex: "1 1 auto", height: "100%", pt: 6 }}>
            <Stack>
              <Typography variant="subTitle1" sx={{ pb: 2 }}>
                비용
              </Typography>
              <Typography sx={{ pb: 2, fontWeight: "500" }}>
                RPA 개발에 투하된 총자본 <br /> 개발비, 라이선스, 클라우드 비용 등
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                    color: "common.textColor1",
                    margin: "-2px 6px 0 0",
                  },
                }}
              >
                <PiClockLight />
                <Typography color="common.textColor1">2023.01 - 2023.06</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ pb: 3 }}>
              <Typography variant="gridNumbs">1,334,200</Typography>
              <Typography variant="gridNumbsText" color="primary.main">
                만원
              </Typography>
            </Stack>
          </Stack>
        </div>
        <div key="c">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: "1", position: "relative" }}>
            <Typography variant="font18" sx={{ fontWeight: "500" }}>
              아이디어 제안 채택율
            </Typography>
            <IconButton
              aria-label="Close"
              disableRipple
              aria-controls="menu-comment"
              aria-haspopup="true"
              sx={{
                position: "absolute",
                top: "-6px",
                right: "-20px",
              }}
            >
              <PiDotsThreeVerticalBold color="text.secondary" />
            </IconButton>
          </Stack>
          <Stack justifyContent="space-between" sx={{ flex: "1 1 auto", height: "100%", pt: 6 }}>
            <Stack>
              <Typography variant="subTitle1" sx={{ pb: 2 }}>
                아이디어 채택율
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                    color: "common.textColor1",
                    margin: "-2px 6px 0 0",
                  },
                }}
              >
                <PiClockLight />
                <Typography color="common.textColor1">2023.01 - 2023.06</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ pb: 3 }}>
              <Typography variant="gridNumbs">89</Typography>
              <Typography variant="gridNumbsText" color="primary.main">
                %
              </Typography>
            </Stack>
          </Stack>
        </div>
        <div key="d">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: "1", position: "relative" }}>
            <Typography variant="font18" sx={{ fontWeight: "500" }}>
              부서별 아이디어 건수
            </Typography>
            <IconButton
              aria-label="Close"
              disableRipple
              aria-controls="menu-comment"
              aria-haspopup="true"
              sx={{
                position: "absolute",
                top: "-6px",
                right: "-20px",
              }}
            >
              <PiDotsThreeVerticalBold color="text.secondary" />
            </IconButton>
          </Stack>
          <Stack justifyContent="flex-start" alignItems="" sx={{ flex: "1 1 auto", height: "100%", pt: 6, pb: 3 }}>
            <Stack sx={{ flex: "0 0 auto" }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                    color: "common.textColor1",
                    margin: "-2px 6px 0 0",
                  },
                }}
              >
                <PiClockLight />
                <Typography color="common.textColor1">2023.01 - 2023.06</Typography>
              </Stack>
            </Stack>
            <Stack sx={{ flex: "1 1 auto", backgroundColor: "lightgray" }}>Graph 영역 입니다. 실제 사용시 backgroundColor는 빼주세요</Stack>
          </Stack>
        </div>
        <div key="e">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: "1", position: "relative" }}>
            <Typography variant="font18" sx={{ fontWeight: "500" }}>
              부서별 아이디어 건수
            </Typography>
            <IconButton
              aria-label="Close"
              disableRipple
              aria-controls="menu-comment"
              aria-haspopup="true"
              sx={{
                position: "absolute",
                top: "-6px",
                right: "-20px",
              }}
            >
              <PiDotsThreeVerticalBold color="text.secondary" />
            </IconButton>
          </Stack>
          <Stack justifyContent="flex-start" alignItems="" sx={{ flex: "1 1 auto", height: "100%", pt: 6, pb: 3 }}>
            <Stack sx={{ flex: "0 0 auto" }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                    color: "common.textColor1",
                    margin: "-2px 6px 0 0",
                  },
                }}
              >
                <PiClockLight />
                <Typography color="common.textColor1">2023.01 - 2023.06</Typography>
              </Stack>
            </Stack>
            <Stack sx={{ flex: "1 1 auto", backgroundColor: "lightgray" }}>Graph 영역 입니다. 실제 사용시 backgroundColor는 빼주세요</Stack>
          </Stack>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default layoutGrid;
