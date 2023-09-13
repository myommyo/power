import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

import Buttons from "../components/Buttons";
import { FiCheckSquare } from "react-icons/fi";
import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

export default function Sample() {
  return (
    <>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Box>
            <Buttons primary>Primary</Buttons>
            <Buttons primary disabled>
              Primary Disabled
            </Buttons>
            <Buttons outlined>
              <FiCheckSquare />
              Outlined
            </Buttons>
            <Buttons outlined disabled>
              Outlined Disabled
            </Buttons>

            <Buttons primary variant="text">
              Text
            </Buttons>
            <Buttons primary variant="text" disabled>
              Text Disabled
            </Buttons>

            <Buttons outlined variant="etc">
              Etc
            </Buttons>
            <Buttons outlined variant="etc" disabled>
              Etc Disabled
            </Buttons>
          </Box>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
            <Buttons primary>
              <FiCheckSquare />
              일괄등록
            </Buttons>
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
        </Box>
      </Stack>
    </>
  );
}
