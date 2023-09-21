import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Avatar, Link } from "@mui/material";

import Buttons from "../components/Buttons";

import StarRating from "../components/StarRating";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import CloseIcon from "@mui/icons-material/Close";
import { PiDotsThreeVerticalBold, PiWarningCircleThin } from "react-icons/pi";
import { LuThumbsUp } from "react-icons/lu";

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

export default function Sub08() {
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
          <Typography variant="sectionTitle">아이디어 제안 진행상황</Typography>

          <Paper sx={{ p: 8, mt: 4 }}>
            <Stack sx={{ mb: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                요청
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>제목</div>
                    </th>
                    <td>
                      <div>아이디어 등록</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>작성자</div>
                    </th>
                    <td>
                      <div>admin</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>내용</div>
                    </th>
                    <td>
                      <div>아이디어 제안 진행 상황 내용이 입력되는 영역입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>첨부파일</div>
                    </th>
                    <td>
                      <div>
                        <Box
                          sx={{
                            height: "42px",
                            display: "inline-flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            backgroundColor: "background.default",
                            px: 2,
                          }}
                        >
                          <Link href="#">.GITCONFIG</Link>
                        </Box>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>진행상황</div>
                    </th>
                    <td>
                      <div>검토대기중</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack sx={{ mb: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                접수
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>업무담당자</div>
                    </th>
                    <td>
                      <div>admin</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>기술담당자</div>
                    </th>
                    <td>
                      <div>admin</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>접수의견</div>
                    </th>
                    <td>
                      <div>1 업무 당당자 및 기술 담당자 접수 의견이 입력되는 영역입니다</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack sx={{ mb: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                업무검토
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>업무담당자</div>
                    </th>
                    <td>
                      <div>admin</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">진행 가능 여부</div>
                    </th>
                    <td>
                      <div>적합</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>업무 검토 의견</div>
                    </th>
                    <td>
                      <div>해당 아이디어 제안에 대한 업무 검토 의견이 입력되는 영역입니다</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack sx={{ mb: 10 }}>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                기술 검토
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>기술담당자</div>
                    </th>
                    <td>
                      <div>admin</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">진행 가능 여부</div>
                    </th>
                    <td>
                      <div>적합</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>업무 검토 의견</div>
                    </th>
                    <td>
                      <div>해당 아이디어 제안에 대한 기술 검토 의견이 입력되는 영역입니다</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <Stack>
              <Typography variant="subTitle1" sx={{ mb: 4 }}>
                최종승인
              </Typography>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div>최종 검토 의견</div>
                    </th>
                    <td>
                      <div>해당 아이디어 제안에 대한 최종 검토 의견이 입력되는 영역입니다</div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <Stack direction="row" alignItems="center" sx={{ px: 3, ml: 4, height: "30px", backgroundColor: "background.default", borderRadius: "16px" }}>
                    <LuThumbsUp />
                    <Typography variant="searchLabel" sx={{ ml: 2, mt: "4px" }}>
                      0
                    </Typography>
                  </Stack>
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
                      공감
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
                    <Stack direction="row" alignItems="center" sx={{ px: 3, ml: 4, height: "30px", backgroundColor: "background.default", borderRadius: "16px" }}>
                      <LuThumbsUp />
                      <Typography variant="searchLabel" sx={{ ml: 2, mt: "4px" }}>
                        999
                      </Typography>
                    </Stack>
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
                        공감
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
                  <Stack direction="row" alignItems="center" sx={{ px: 3, ml: 4, height: "30px", backgroundColor: "background.default", borderRadius: "16px" }}>
                    <LuThumbsUp />
                    <Typography variant="searchLabel" sx={{ ml: 2, mt: "4px" }}>
                      999
                    </Typography>
                  </Stack>
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
                      공감
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
