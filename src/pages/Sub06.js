import * as React from "react";
import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import Table from "../components/Table";
import SearchBox from "../components/SearchBox";
import Paginations from "../components/Paginations";
import UseSwitchesBasic from "../components/Switch";
import StarsRating from "../components/StarRating";

import Buttons from "../components/Buttons";

import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

export default function Sub06() {
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="sectionTitle">커뮤니티관리</Typography>
            </div>
            <Stack direction="row" spacing={2}>
              <Buttons outlined>
                <PiArrowCounterClockwiseBold />
                초기화
              </Buttons>
              <Buttons outlined>
                <BsPencilSquare />
                신규
              </Buttons>
              <Buttons outlined>
                <BsEye />
                조회
              </Buttons>
              <Buttons outlined>
                <IoDocumentOutline />
                엑셀
              </Buttons>
            </Stack>
          </Stack>

          <Paper sx={{ mt: 3 }}>
            <SearchBox />
          </Paper>

          <Paper sx={{ mt: 10, p: 8 }}>
            <Table />
            <Paginations />
            <UseSwitchesBasic />
            <StarsRating />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
