import React from "react";
import { Stack, Button, Typography } from "@mui/material";

import Buttons from "../components/Buttons";
import { FiCheckSquare } from "react-icons/fi";
import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

const ButtonTitle = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="sectionTitle">RPA 변경관리(관리자)</Typography>
        </div>
        <Stack direction="row" spacing={2}>
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
      </Stack>
    </>
  );
};

export default ButtonTitle;
