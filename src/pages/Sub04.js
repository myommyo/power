import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";

import "./Sub04.css";

export default function Sub04() {
  return (
    <>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Calendar />
      </Stack>
    </>
  );
}
