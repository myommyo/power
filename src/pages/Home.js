import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import "./Home.css";
import ResponsiveGridLayout from "../components/layoutGrid";
import DateRange from "../components/DateRangePicker";

export default function Home() {
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack>
            <Link to={"/"}>Home</Link>
            <Link to={"/Sample"}>Sample</Link>
            <Link to={"/sub01"}>Sub01</Link>
            <Link to={"/sub04"}>Sub04</Link>
            <Link to={"/sub05"}>Sub05</Link>
            <Link to={"/sub06"}>Sub06</Link>
            <Link to={"/sub07"}>Sub07</Link>
            <Link to={"/sub08"}>Sub08</Link>
            <Link to={"/sub09"}>Sub09</Link>
            <Link to={"/sub10"}>Sub10</Link>
          </Stack>

          <div>Home 페이지 입니다.</div>
          <DateRange />
          <Paper sx={{ mt: 5 }}>
            <ResponsiveGridLayout />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
