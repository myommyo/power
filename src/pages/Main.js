import React, { useRef, useState } from "react";
import { Box, Paper, Stack, Typography, Link, Divider } from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile, LuTrash, LuPlus } from "react-icons/lu";
import { TbX } from "react-icons/tb";

//Grid
import ResponsiveGridLayout from "../components/layoutGrid";

//search
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { RiSearchLine } from "react-icons/ri";

//Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import icoMore from "../assets/images/ico_more.png";

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

export default function Main() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [show, setShow] = useState(false);

  //검색결과닫기
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Box>
        <Box sx={{ boxSizing: "border-box", p: 12, mt: 20 }}>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Box component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 480, borderBottom: "2px solid", borderColor: "text.main" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="검색어를 입력하세요." inputProps={{ "aria-label": "검색어를 입력하세요." }} />
              <IconButton disableRipple color="primary" type="submit" aria-label="search" sx={{ marginRight: "-10px" }}>
                <RiSearchLine sx={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
          </Stack>

          <Paper sx={{ mt: 10, p: 8, pt: 10, position: "relative" }} style={{ display: isVisible ? "block" : "none" }}>
            <Typography variant="subTitle1" sx={{ fontWeight: "400" }}>
              “
              <Typography variant="subTitle1" color="secondary.main">
                자동
              </Typography>
              ”(으)로 검색한 결과, 총
              <Typography variant="subTitle1" color="secondary.main">
                7
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
              <Tab disableRipple label="사용가능 RPA (7)" {...a11yProps(0)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="Q&A (0)" {...a11yProps(1)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="공지사항 (0)" {...a11yProps(2)} sx={{ borderRight: "1px solid", borderColor: "common.tabBd" }} />
              <Tab disableRipple label="사용자매뉴얼 RPA (0)" {...a11yProps(3)} />
            </Tabs>

            <TabPanel
              value={value}
              index={0}
              sx={{
                "& .css-38zrbw": {
                  p: 0,
                  border: "1px solid red !important",
                },
              }}
            >
              <table className="tableList">
                <colgroup>
                  <col width="*" />
                  <col width="200" />
                  <col width="200" />
                  <col width="200" />
                </colgroup>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <table className="tableList">
                <colgroup>
                  <col width="*" />
                  <col width="200" />
                  <col width="200" />
                  <col width="200" />
                </colgroup>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화 2
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <table className="tableList">
                <colgroup>
                  <col width="*" />
                  <col width="200" />
                  <col width="200" />
                  <col width="200" />
                </colgroup>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화 3
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <table className="tableList">
                <colgroup>
                  <col width="*" />
                  <col width="200" />
                  <col width="200" />
                  <col width="200" />
                </colgroup>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화 4
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        광고심의 연합회 보고 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        정형보고서 작성 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영지원그룹
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Link underline="hover">
                      <Typography variant="subTitle1" color="text.main" sx={{ fontWeight: "400" }}>
                        외환 일일 보고서 자동화
                      </Typography>
                    </Link>
                  </th>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      2022. 08.29
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      경영연구소
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="font18" color="common.textColor1">
                      김세은
                    </Typography>
                  </td>
                </tr>
              </table>
            </TabPanel>

            {/* 닫기버튼 */}
            <IconButton aria-label="Close" disableRipple onClick={() => setIsVisible(false)} sx={{ position: "absolute", right: "32px", top: "32px" }}>
              <TbX />
            </IconButton>
          </Paper>

          <Paper sx={{ mt: 10, p: 6 }}>
            <Stack direction="row" justifyContent="space-around">
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  13
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>아이디어 제안요청</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  41
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>RPA 이력관리</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  9
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>RPA 업무변경관리</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  88
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>RPA 조치사항</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  24
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>커뮤니티</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  0
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>BotStore</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  4
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>연관시스템</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  15
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>RPA 적합성검증</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  42
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>ROI 관리</Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack justifyContent="center" alignItems="center" flexBasis="153px">
                <Typography variant="sectionTitle" color="secondary.main" sx={{ mb: 4 }}>
                  9
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>사용자권한설정</Typography>
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ mt: 10, p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 5, pt: 7 }}>
              <Typography variant="sectionTitle">자동화 아이디어</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Buttons outlined>
                  <LuPenSquare />
                  명칭변경
                </Buttons>
                <Buttons outlined>
                  <LuPlus />
                  영역추가
                </Buttons>
              </Stack>
            </Stack>
            <ResponsiveGridLayout />
          </Paper>

          <Paper sx={{ mt: 10, p: 8, pt: 10, flex: "0 0 100%" }}>
            <Typography variant="sectionTitle">홍보존</Typography>
            <Stack sx={{ width: "100%", maxWidth: "1300px", mt: 8 }}>
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mainSwiper"
              >
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    sx={{
                      boxSizing: "border-box",
                      height: "260px",
                      border: "1px solid",
                      borderColor: "background.default",
                      backgroundColor: "background.default",
                      borderRadius: "24px",
                      p: 8,
                      transition: "all .5s ease",
                      "&:hover": {
                        backgroundColor: "background.paper",
                        boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.16);",
                        borderColor: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="subTitle1">[RPA 포탈 배우기] Bot Store 및 등록 (1)</Typography>

                    <Box sx={{ mt: 6 }}>
                      <Typography>RPA 포털에서 MY BOT을 등록하는 법을 알아보세요!</Typography>
                    </Box>
                    <Box sx={{ position: "absolute", left: "32px", bottom: "32px" }}>
                      <img src={icoMore} alt="더보기" width="24" height="24" />
                    </Box>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
