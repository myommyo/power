import * as React from "react";
import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import SearchBox from "../components/SearchBox";
import Paginations from "../components/Paginations";
import UseSwitchesBasic from "../components/Switch";
import StarsRating from "../components/StarRating";

export default function Sub06() {
  return (
    <>
      <Header />

      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="sectionTitle">커뮤니티관리</Typography>
            </div>
            <Stack direction="row" spacing={2}>
              <Button color="primary" variant="outlined" size="icon" startIcon={<ReplayOutlinedIcon />}>
                초기화
              </Button>
              <Button color="primary" variant="outlined" size="icon" startIcon={<CreateOutlinedIcon />}>
                신규
              </Button>
              <Button color="primary" variant="outlined" size="icon" startIcon={<RemoveRedEyeOutlinedIcon />}>
                조회
              </Button>
              <Button color="primary" variant="outlined" size="icon" startIcon={<InsertDriveFileOutlinedIcon />}>
                엑셀
              </Button>
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
