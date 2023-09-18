import * as React from "react";
import { Box, Paper, Stack, Typography, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import Table from "../components/Table";
import Paginations from "../components/Paginations";

import Buttons from "../components/Buttons";

import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-root": {
    paddingLeft: 16,
    minHeight: 40,
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
  },
  "& .Mui-focused": {
    borderColor: "#202844 !important",
  },
  "& .Mui-disabled": {
    backgroundColor: "#f8f8f8",
    borderColor: "#e5e5e5",
    color: "#999",
  },
  "& .Mui-readOnly": {
    backgroundColor: "#f8f8f8",
    borderColor: "#e5e5e5",
    color: "#000",
    pointerEvents: "none",
  },
});

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
            <Grid container alignItems="center" sx={{ m: 0, p: 6 }}>
              <Grid item xs={4}>
                <Box>
                  <Grid container alignItems="center">
                    <Grid item xs={4} sx={{ flexShrink: 0 }}>
                      <Box>
                        <Typography variant="searchLabel">커뮤니티명</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Stack direction="row">
                          <StyledTextField variant="standard" placeholder="Default" fullWidth />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ mt: 10, p: 8 }}>
            <Table />
            <Paginations />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
