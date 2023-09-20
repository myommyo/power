import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Avatar, Link } from "@mui/material";

import Buttons from "../components/Buttons";

import StarRating from "../components/StarRating";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import CloseIcon from "@mui/icons-material/Close";
import { PiDotsThreeVerticalBold, PiWarningCircleThin } from "react-icons/pi";

import tempThumb from "../assets/images/tempThumb.png";
import tempThumb2 from "../assets/images/tempThumb2.png";

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

export default function Sub11() {
  //select
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Typography variant="sectionTitle">BOT STORE 등록/수정</Typography>

          <Paper sx={{ p: 8, mt: 4 }}>
            <Stack sx={{ mb: 10 }}>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>평점</div>
                    </th>
                    <td>
                      <div>
                        <StarRating readOnly defaultValue={2} />
                      </div>
                    </td>
                    <th>
                      <div>다운로드</div>
                    </th>
                    <td>
                      <div>200회</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>Bot명</div>
                    </th>
                    <td colSpan={3}>
                      <div>네이버 뉴스검색</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>RPA 제품</div>
                    </th>
                    <td>
                      <div>A Works</div>
                    </td>
                    <th>
                      <div>Version</div>
                    </th>
                    <td>
                      <div>3.0</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>업무영역</div>
                    </th>
                    <td>
                      <div>공통</div>
                    </td>
                    <th>
                      <div>대상 어플리케이션</div>
                    </th>
                    <td>
                      <div>Chrome / Excel</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>실행구분</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <Stack direction="row" alignItems="center">
                          File
                          <Box
                            sx={{
                              height: "42px",
                              display: "inline-flex",
                              alignItems: "center",
                              borderRadius: "4px",
                              backgroundColor: "background.default",
                              px: 2,
                              ml: 4,
                              mr: 30,
                            }}
                          >
                            <Link href="#">NaverNewsBot.exe</Link>
                          </Box>
                          Work Center
                          <Box
                            sx={{
                              height: "42px",
                              display: "inline-flex",
                              alignItems: "center",
                              borderRadius: "4px",
                              backgroundColor: "background.default",
                              px: 2,
                              ml: 4,
                            }}
                          >
                            NaverNewsBot.Process
                          </Box>
                        </Stack>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>프로세스 설명</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        1. 검색할 키워드를 엑셀 템플릿 파일에 입력합니다. <br />
                        2. 검색 키워드 작성 파일을 RPA에게 요청합니다.
                        <br />
                        3. 지정된 검색사이트, 네이버, 구글, 다음 에서 키워드 검색합니다.
                        <br />
                        4. 검색자료는 요청자의 메일로 접수됩니다.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>장점</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        1. 검색할 키워드를 엑셀 템플릿 파일에 입력합니다. <br />
                        2. 검색 키워드 작성 파일을 RPA에게 요청합니다.
                        <br />
                        3. 지정된 검색사이트, 네이버, 구글, 다음 에서 키워드 검색합니다.
                        <br />
                        4. 검색자료는 요청자의 메일로 접수됩니다.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>대표이미지</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <Stack className="thumbNail" flexShrink={0}>
                          <img src={tempThumb} alt="대표이미지" className="thumbNailImage" />
                        </Stack>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>실행방법</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <Stack className="stepBoxView">
                          <Typography
                            variant="smallFont"
                            sx={{
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexShrink: 0,
                              color: "common.main",
                              backgroundColor: "primary.main",
                              width: "72px",
                              height: "28px",
                              borderRadius: "14px",
                              mb: 3,
                            }}
                          >
                            Step 01
                          </Typography>
                          <Stack direction="row">
                            <Stack className="thumbNail" flexShrink={0} sx={{ mr: 6 }}>
                              <img src={tempThumb} alt="Step01 이미지" className="thumbNailImageSmall" />
                            </Stack>
                            <Typography>
                              내용이 들어갑니다 내용이 들어갑니다. <br /> 내용내용 내용이 들어갑니다 내용 들어갑니다. <br />
                              내용이 들어갑니다 내용 들어갑니다.
                              <br /> 내용이 들어갑니다내용 들어갑니다. <br />
                              내용이 들어갑니다내용 들어갑니다. <br />
                              내용이 들어갑니다내용 들어갑니다. 내용이 들어갑니다내용 들어갑니다. <br />
                              내용이 들어갑니다내용 들어갑니다. 내용이 들어갑니다내용 들어갑니다. 내용이 들어갑니다내용 들어갑니다. <br />
                              내용이 들어갑니다내용 들어갑니다. 내용이 들어갑니다
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack className="stepBoxView">
                          <Typography
                            variant="smallFont"
                            sx={{
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexShrink: 0,
                              color: "common.main",
                              backgroundColor: "primary.main",
                              width: "72px",
                              height: "28px",
                              borderRadius: "14px",
                              mb: 3,
                            }}
                          >
                            Step 02
                          </Typography>
                          <Stack direction="row">
                            <Stack className="thumbNail" flexShrink={0} sx={{ mr: 6 }}>
                              <img src={tempThumb2} alt="Step02 이미지" className="thumbNailImageSmall" />
                            </Stack>
                            <Typography>
                              내용이 들어갑니다 내용이 들어갑니다. <br /> 내용내용 내용이 들어갑니다 내용 들어갑니다. <br />
                              내용이 들어갑니다 내용 들어갑니다.
                              <br /> 내용이 들어갑니다내용 들어갑니다. <br />
                              내용이 들어갑니다내용 들어갑니다.
                            </Typography>
                          </Stack>
                        </Stack>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack sx={{ mb: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                프로세스 정보
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>프로세스</div>
                    </th>
                    <td colSpan={3}>
                      <div>네이버 뉴스검색</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>등록부서</div>
                    </th>
                    <td>
                      <div>IT 지원</div>
                    </td>
                    <th>
                      <div>등록자</div>
                    </th>
                    <td>
                      <div>Dongjun.kim@powergen.ai</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>등록일</div>
                    </th>
                    <td>
                      <div>2023.05.01 11:30:12</div>
                    </td>
                    <th>
                      <div>최근수정일</div>
                    </th>
                    <td>
                      <div>2023.05.01 11:30:12</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 12 }}>
              <Buttons outlined variant="text">
                취소
              </Buttons>
              <Buttons primary variant="text">
                요청
              </Buttons>
            </Stack>
          </Paper>

          <Paper sx={{ p: 8, mt: 10 }}>
            <Box sx={{ borderBottom: "1px solid", borderColor: "primary", pb: 4 }}>
              <Typography variant="subTitle1">댓글 (0)</Typography>
            </Box>
            {/* 댓글 없는 경우 */}
            <Stack className="commentBox" sx={{ borderBottom: "1px solid", borderColor: "common.cmtBd" }}>
              <Stack justifyContent="center" alignItems="center" sx={{ height: "237px" }}>
                <Box
                  sx={{
                    "& svg": {
                      width: "60px",
                      height: "60px",
                      color: "text.disabled",
                    },
                  }}
                >
                  <PiWarningCircleThin color="text.disabled" sx={{ width: "48px", height: "48px" }} />
                </Box>
                <Typography sx={{ mt: 3, color: "text.disabled" }}>아이디어에 대한 의견이 없습니다.</Typography>
              </Stack>
            </Stack>
            {/* //댓글 없는 경우 */}

            {/* 댓글 */}
            <Stack className="commentBox" sx={{ py: 8, borderBottom: "1px solid", borderColor: "common.cmtBd" }}>
              <Stack className="commentHeader" direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" alignItems="center">
                  <Avatar alt="Admin" src="/static/images/avatar/3.jpg" sx={{ width: 36, height: 36, mr: 3 }} />
                  <Typography variant="subTitle2" sx={{ mr: 2 }}>
                    Admin
                  </Typography>
                  <Typography variant="inputSide" sx={{ mr: 4 }}>
                    2023.08.22 18:54:10
                  </Typography>
                  <StarRating readOnly />
                </Stack>
                <Box>
                  <IconButton disableRipple aria-label="account of current user" aria-controls="menu-comment" aria-haspopup="true" onClick={handleMenu} color="inherit">
                    <PiDotsThreeVerticalBold color="text.secondary" />
                  </IconButton>
                  <Menu
                    id="menu-comment"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        borderRadius: "24px !important",
                        minWidth: 152,
                        boxSizing: "border-box",
                        px: 6,
                        pt: 9,
                      },
                      "& .MuiList-root": {
                        p: 0,
                        pb: 6,
                      },
                      "& .MuiList-root > li": {
                        background: "#fff",
                        p: 0,
                      },
                    }}
                  >
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                      대댓글
                    </MenuItem>
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                      공감?
                    </MenuItem>
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16 }}>
                      삭제
                    </MenuItem>

                    <IconButton
                      disableRipple
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        top: "-31px",
                        right: "-17px",
                      }}
                    >
                      <CloseIcon color="primary" />
                    </IconButton>
                  </Menu>
                </Box>
              </Stack>
              <Stack>
                <Typography sx={{ pt: 2, pl: 12, lineHeight: "21px" }}>
                  굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극
                  추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다.
                </Typography>
              </Stack>

              {/* 대댓글 */}
              <Stack className="commentBox" sx={{ pt: 8, pl: 11, pb: 0 }}>
                <Stack className="commentHeader" direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" alignItems="center">
                    <Avatar alt="Admin" src="/static/images/avatar/3.jpg" sx={{ width: 36, height: 36, mr: 3 }} />
                    <Typography variant="subTitle2" sx={{ mr: 2 }}>
                      Admin
                    </Typography>
                    <Typography variant="inputSide" sx={{ mr: 4 }}>
                      2023.08.22 18:54:10
                    </Typography>
                    <StarRating readOnly />
                  </Stack>
                  <Box>
                    <IconButton disableRipple aria-label="account of current user" aria-controls="menu-comment" aria-haspopup="true" onClick={handleMenu} color="inherit">
                      <PiDotsThreeVerticalBold color="text.secondary" />
                    </IconButton>
                    <Menu
                      id="menu-comment"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{
                        "& .MuiMenu-paper": {
                          borderRadius: "24px !important",
                          minWidth: 152,
                          boxSizing: "border-box",
                          px: 6,
                          pt: 9,
                        },
                        "& .MuiList-root": {
                          p: 0,
                          pb: 6,
                        },
                        "& .MuiList-root > li": {
                          background: "#fff",
                          p: 0,
                        },
                      }}
                    >
                      <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                        대댓글
                      </MenuItem>
                      <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                        공감?
                      </MenuItem>
                      <MenuItem disableRipple disableGutters sx={{ fontSize: 16 }}>
                        삭제
                      </MenuItem>

                      <IconButton
                        disableRipple
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          top: "-31px",
                          right: "-17px",
                        }}
                      >
                        <CloseIcon color="primary" />
                      </IconButton>
                    </Menu>
                  </Box>
                </Stack>
                <Stack>
                  <Typography sx={{ pt: 2, pl: 12, lineHeight: "21px" }}>
                    굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극
                    추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다.
                  </Typography>
                </Stack>
              </Stack>
              {/* //대댓글 */}
            </Stack>
            {/* //댓글 */}

            {/* 댓글 */}
            <Stack className="commentBox" sx={{ py: 8, borderBottom: "1px solid", borderColor: "common.cmtBd" }}>
              <Stack className="commentHeader" direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" alignItems="center">
                  <Avatar alt="Admin" src="/static/images/avatar/3.jpg" sx={{ width: 36, height: 36, mr: 3 }} />
                  <Typography variant="subTitle2" sx={{ mr: 2 }}>
                    Admin
                  </Typography>
                  <Typography variant="inputSide" sx={{ mr: 4 }}>
                    2023.08.22 18:54:10
                  </Typography>
                  <StarRating readOnly />
                </Stack>
                <Box>
                  <IconButton disableRipple aria-label="account of current user" aria-controls="menu-comment" aria-haspopup="true" onClick={handleMenu} color="inherit">
                    <PiDotsThreeVerticalBold color="text.secondary" />
                  </IconButton>
                  <Menu
                    id="menu-comment"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        borderRadius: "24px !important",
                        minWidth: 152,
                        boxSizing: "border-box",
                        px: 6,
                        pt: 9,
                      },
                      "& .MuiList-root": {
                        p: 0,
                        pb: 6,
                      },
                      "& .MuiList-root > li": {
                        background: "#fff",
                        p: 0,
                      },
                    }}
                  >
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                      대댓글
                    </MenuItem>
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16, mb: 2 }}>
                      공감?
                    </MenuItem>
                    <MenuItem disableRipple disableGutters sx={{ fontSize: 16 }}>
                      삭제
                    </MenuItem>

                    <IconButton
                      disableRipple
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        top: "-31px",
                        right: "-17px",
                      }}
                    >
                      <CloseIcon color="primary" />
                    </IconButton>
                  </Menu>
                </Box>
              </Stack>
              <Stack>
                <Typography sx={{ pt: 2, pl: 12, lineHeight: "21px" }}>
                  굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극
                  추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다. 굉장히 참신한 아이디어입니다. 적극 추천합니다.
                </Typography>
              </Stack>

              {/* 대댓글 작성 */}
              <Stack className="commentBox" sx={{ pt: 8, pl: 11, pb: 0 }}>
                <Stack className="commentHeader" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subTitle2" sx={{ mr: 2, mb: 3 }}>
                    Admin님에게 댓글
                  </Typography>
                </Stack>
                <StyledTextField multiline fullWidth rows="5" variant="standard" placeholder="댓글 내용 작성" />
                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 3 }}>
                  <Buttons outlined variant="etc2">
                    취소
                  </Buttons>
                  <Buttons primary variant="etc2">
                    작성
                  </Buttons>
                </Stack>
              </Stack>
              {/* //대댓글 작성 */}
            </Stack>
            {/* //댓글 */}

            <Stack justifyContent="center" alignItems="center" sx={{ mt: 16 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                이 아이디어에 대한 평가
              </Typography>
              <StarRating />
            </Stack>

            <Stack sx={{ mt: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                이 아이디어에 대한 의견
              </Typography>
              <StyledTextField multiline fullWidth rows="5" variant="standard" placeholder="이 아이디어에 대한 의견" />
            </Stack>

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 12 }}>
              <Buttons outlined variant="text">
                취소
              </Buttons>
              <Buttons primary variant="text">
                작성
              </Buttons>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
