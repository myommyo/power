import React from "react";
import { Stack, Button, Typography } from "@mui/material";

import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile } from "react-icons/lu";

const ButtonTitle = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="sectionTitle">RPA 변경관리(관리자)</Typography>
        </div>
        <Stack direction="row" spacing={2}>
          <Buttons primary>
            <LuPenSquare />
            일괄등록
          </Buttons>
          <Buttons outlined>
            <LuRotateCcw />
            초기화
          </Buttons>
          <Buttons outlined>
            <LuCheckSquare />
            신규
          </Buttons>
          <Buttons outlined>
            <LuEye />
            조회
          </Buttons>
          <Buttons outlined>
            <LuFile />
            엑셀
          </Buttons>
        </Stack>
      </Stack>
    </>
  );
};

export default ButtonTitle;
