import * as React from "react";
import { Box, Paper, Stack, Typography, Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Buttons from "../components/Buttons";

//images
import NoProfile from "../assets/images/no_profile.png";
import IcoCamera from "../assets/images/ico_camera.png";

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-root": {
    paddingLeft: 16,
    height: 40,
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

const SmallAvatar = styled(Avatar)(() => ({
  width: 36,
  height: 36,
}));

export default function Sub09() {
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "760px", mt: 20, mx: "auto" }}>
          <Box>
            <Typography variant="sectionTitle">프로필 설정</Typography>
          </Box>

          <Paper sx={{ mt: 3, px: 8, pb: 8, pt: 16 }}>
            <Stack direction="row" justifyContent="center">
              <Badge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={<SmallAvatar alt="" src={IcoCamera} />}>
                <Avatar alt="" src={NoProfile} sx={{ width: 128, height: 128, background: "#d9d9d9" }} />
              </Badge>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>김파워</Typography>
              </Box>
              <Box>
                <Typography>구매팀 팀장</Typography>
              </Box>
            </Stack>

            <Grid container spacing={6} sx={{ mt: 0 }}>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">아이디</Typography>
                </Box>
                <StyledTextField variant="standard" placeholder="아이디" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">비밀번호</Typography>
                </Box>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <StyledTextField variant="standard" placeholder="비밀번호" fullWidth />
                  <Buttons outlined variant="etc">
                    비밀번호변경
                  </Buttons>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">사용자명</Typography>
                </Box>
                <StyledTextField variant="standard" placeholder="사용자명" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">부서명</Typography>
                </Box>
                <StyledTextField variant="standard" disabled placeholder="구매팀" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">직책</Typography>
                </Box>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <StyledTextField variant="standard" disabled placeholder="팀장" fullWidth />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">메일 계정</Typography>
                </Box>
                <StyledTextField variant="standard" placeholder="메일 계정" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="searchLabel">휴대폰번호</Typography>
                </Box>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <StyledTextField variant="standard" placeholder="010-1234-1234" fullWidth />
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 12 }}>
              <Buttons outlined variant="text">
                취소
              </Buttons>
              <Buttons primary variant="text">
                저장
              </Buttons>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
