import * as React from "react";
import { Box, Paper, Stack, Typography, Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import SideBar from "../components/SideBar";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Buttons from "../components/Buttons";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Sub09() {
  return (
    <>
      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "760px", mt: 20, mx: "auto" }}>
          <Box sx={{ pb: 3 }}>
            <Typography variant="sectionTitle">프로필 설정</Typography>
          </Box>

          <Paper sx={{ mt: 3, px: 8, pb: 8 }}>
            <Stack direction="row" spacing={2}>
              <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledBadge>
              <Badge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Badge>
            </Stack>
            <Grid container spacing={6}>
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
