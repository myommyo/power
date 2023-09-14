import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";

import SearchBox from "../components/SearchBox";
import Buttons from "../components/Buttons";
import { BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

import "./Sub04.css";

export default function Sub04() {
  return (
    <>
      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="sectionTitle">봇수행현황(달력)</Typography>
            </div>
            <Stack direction="row" spacing={2}>
              <Buttons outlined>
                <PiArrowCounterClockwiseBold />
                초기화
              </Buttons>
              <Buttons outlined>
                <BsEye />
                조회
              </Buttons>
            </Stack>
          </Stack>
          <Paper sx={{ mt: 3 }}>
            <SearchBox />
          </Paper>
          <Paper sx={{ mt: 10, px: 8, pt: 10, pb: 8 }}>
            <Calendar />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
