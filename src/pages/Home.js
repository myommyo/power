import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./Home.css";
import ResponsiveGridLayout from "../components/layoutGrid";
import DateRange from "../components/DateRangePicker";

export default function Home() {
  return (
    <>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack>
            <Link to={"/"}>Home</Link>
            <Link to={"/Sample"}>Sample</Link>
            <Link to={"/sub01"}>Sub01</Link>
            <Link to={"/sub04"}>Sub04</Link>
            <Link to={"/sub05"}>Sub05</Link>
            <Link to={"/sub06"}>Sub06</Link>
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
