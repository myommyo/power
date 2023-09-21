import * as React from "react";

import { Box, Paper, Stack, Typography } from "@mui/material";

import Calendar from "../components/Calendar";

import SearchBox from "../components/SearchBox";
import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile } from "react-icons/lu";

import "./Sub04.css";

export default function Sub04() {
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="sectionTitle">봇수행현황(달력)</Typography>
            </div>
            <Stack direction="row" spacing={2}>
              <Buttons outlined>
                <LuRotateCcw />
                초기화
              </Buttons>

              <Buttons outlined>
                <LuEye />
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
