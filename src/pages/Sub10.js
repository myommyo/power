import React, { useState } from "react";
import { Box, Paper, Stack, Typography, Grid } from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import imgChrome from "../assets/images/img_chrome.png";
import imgExcel from "../assets/images/img_excel.png";
import StarRating from "../components/StarRating";
import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile, LuTrash } from "react-icons/lu";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//search
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { RiSearchLine } from "react-icons/ri";

//Tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Sub10() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Box>
            <Typography variant="sectionTitle">BOT STORE</Typography>
          </Box>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 6 }}>
            <Box component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 480, borderBottom: "2px solid", borderColor: "text.main" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="검색어를 입력하세요." inputProps={{ "aria-label": "검색어를 입력하세요." }} />
              <IconButton disableRipple color="primary" type="submit" aria-label="search" sx={{ marginRight: "-10px" }}>
                <RiSearchLine sx={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Buttons primary>
                <LuCheckSquare />
                등록
              </Buttons>
              <Buttons outlined>
                <LuRotateCcw />
                초기화
              </Buttons>
            </Stack>
          </Stack>

          <Paper sx={{ mt: 6, position: "relative" }}>
            <Box className="tableToggle">
              <div className={show ? "toggleShow" : "toggleHide"}>
                <Grid container>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      borderRight: "1px solid",
                      borderColor: "text.secondary",
                    }}
                  >
                    <Stack>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          height: "48px",
                          backgroundColor: "secondary.light",
                          borderRadius: "12px 0 0 0 ",
                        }}
                      >
                        <Typography variant="searchLabel" color="common.main">
                          RPA제품
                        </Typography>
                      </Stack>
                      <ul className="tableToggleList">
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                      </ul>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      borderRight: "1px solid",
                      borderColor: "text.secondary",
                    }}
                  >
                    <Stack>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          height: "48px",
                          backgroundColor: "secondary.light",
                        }}
                      >
                        <Typography variant="searchLabel" color="common.main">
                          RPA제품
                        </Typography>
                      </Stack>
                      <ul className="tableToggleList">
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                      </ul>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          height: "48px",
                          backgroundColor: "secondary.light",
                          borderRadius: "0 12px 0 0 ",
                        }}
                      >
                        <Typography variant="searchLabel" color="common.main">
                          RPA제품
                        </Typography>
                      </Stack>
                      <ul className="tableToggleList">
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                        <li>
                          <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                        </li>
                      </ul>
                    </Stack>
                  </Grid>
                </Grid>
              </div>
              <button onClick={() => setShow(!show)} className="buttonMore">
                <ExpandMoreIcon color="primary" sx={{ p: 0, m: 0 }} />
              </button>
            </Box>
          </Paper>

          <Paper sx={{ mt: 15, p: 8 }}>
            <Typography variant="subTitle1">
              검색한 결과, 총{" "}
              <Typography variant="subTitle1" color="secondary.main">
                5
              </Typography>
              건의 검색결과가 있습니다.
            </Typography>

            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              alignItems="stretch"
              sx={{
                borderRadius: "12px",
                border: "1px solid",
                borderColor: "common.tabBd",
                height: "56px",
                boxSizing: "border-box",
                fontSize: "16px",
                my: 8,
                "& .Mui-selected": {
                  backgroundColor: "primary.main",
                  borderRight: "none",
                },
              }}
            >
              <Tab disableRipple label="검색결과 전체 (5)" {...a11yProps(0)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="최신 등록 리스트 (0)" {...a11yProps(1)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="최신 인기 순 Top 10 (0)" {...a11yProps(2)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="다운로드 TOP 10 (0)" {...a11yProps(3)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating defaultValue={4} readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating defaultValue={4} readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating defaultValue={3} readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating defaultValue={4} readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                  <Grid item xs={12 / 5}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        backgroundColor: "background.default",
                        borderRadius: "24px",
                        p: 8,
                        trnasition: "all .5s ease",
                        "&:hover": {
                          backgroundColor: "background.paper",
                          boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ mb: 8 }}>
                        <img src={imgChrome} alt="Chrome" width="28" height="28" />
                        <img src={imgExcel} alt="Excel" width="28" height="28" />
                      </Stack>
                      <Typography variant="subTitle1">네이버 뉴스 검색</Typography>
                      <Typography>By hong kildong</Typography>
                      <Box sx={{ mt: 8 }}>
                        <Typography color="secondary.main">
                          RPA제품 : A.Woks vxxx <br /> 업무영역 : 공통 <br /> 어플리케이션 : 크롬, 엑셀
                        </Typography>
                      </Box>
                      <Box color="common.textColor1" sx={{ mt: 6 }}>
                        <ul className="searchCardList">
                          <li>실행구분 : 파일/워크센터</li>
                          <li>등록일 : 2023.05.10 11:30:12</li>
                          <li>
                            평점 : <StarRating readOnly />
                          </li>
                          <li>다운로드 횟수 : 200</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
