import React, { useState } from "react";
import { Box, Grid, Stack, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import Buttons from "../components/Buttons";
import { FiCheckSquare } from "react-icons/fi";
import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Checkbox from "@mui/material/Checkbox";

//팝업 사용하는 애들
import Button from "@mui/material/Button";
import DialogPop from "../components/DialogPop";
import DialogActions from "@mui/material/DialogActions";

var pop01;
var pop02;
var pop03;
var pop04;

export default function Sample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogName, setDialogName] = useState("");

  const openDialog = (pop) => {
    setIsDialogOpen(true);
    //클릭한 타겟의 name 가져오기

    //클릭한 타겟의 pop 구분 가져오기
    if (pop == "pop01") {
      pop01 = true;
      pop02 = false;
      pop03 = false;
      pop04 = false;
    } else if (pop == "pop02") {
      pop01 = false;
      pop02 = true;
      pop03 = false;
      pop04 = false;
    } else if (pop == "pop03") {
      pop01 = false;
      pop02 = false;
      pop03 = true;
      pop04 = false;
    } else if (pop == "pop04") {
      pop01 = false;
      pop02 = false;
      pop03 = false;
      pop04 = true;
    }
  };
  const closeDialog = () => setIsDialogOpen(false);

  //input
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

  //select
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //accordion
  const [expanded, setExpanded] = React.useState(false);
  const AccHandleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Stack direction="row">
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

            <Buttons outlined variant="text">
              Text Outlined
            </Buttons>
            <Buttons outlined variant="text" disabled>
              Text Outlined Disabled
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

          <Typography variant="subTitle1" sx={{ mt: 5 }}>
            Input Checkbox
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
            <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
            <FormControlLabel control={<Checkbox defaultChecked disableRipple />} label="Active " />
            <FormControlLabel disabled control={<Checkbox disableRipple />} label="Default Disabled" />
            <FormControlLabel disabled control={<Checkbox defaultChecked disableRipple />} label="Default Disabled" />
          </Stack>

          <Typography variant="subTitle1" sx={{ mt: 5 }}>
            Modal
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 1 }}>
            <Buttons outlined onClick={() => openDialog("pop01")}>
              워크센터 프로세스
            </Buttons>
            <Buttons outlined onClick={() => openDialog("pop02")}>
              커뮤니티관리 상세
            </Buttons>
            <Buttons outlined onClick={() => openDialog("pop03")}>
              업무 상세
            </Buttons>
            <Buttons outlined onClick={() => openDialog("pop04")}>
              업무 상세 아코디언
            </Buttons>
          </Stack>
        </Box>
      </Stack>

      <DialogPop isOpen={isDialogOpen} closeDialog={closeDialog} title={"타이틀 영역"}>
        {pop01 && (
          <Box
            sx={{
              p: 8,
            }}
          >
            <Stack sx={{ pb: 12 }}>
              <Typography
                variant="searchLabel"
                sx={{
                  mb: 2,
                }}
              >
                프로세스
              </Typography>
              <StyledTextField
                variant="standard"
                placeholder="프로세스명을 입력하세요"
                fullWidth
                sx={{
                  mb: 6,
                }}
              />
              <Typography
                variant="searchLabel"
                sx={{
                  mb: 2,
                }}
              >
                신청목적
              </Typography>
              <StyledTextField multiline fullWidth rows="3" variant="standard" placeholder="신청목적" />
            </Stack>
            <DialogActions disableSpacing>
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                <Buttons outlined variant="text" onClick={closeDialog}>
                  닫기
                </Buttons>
                <Buttons primary variant="text" onClick={closeDialog} autoFocus>
                  확인
                </Buttons>
              </Stack>
            </DialogActions>
          </Box>
        )}
        {pop02 && (
          <Box
            sx={{
              p: 8,
            }}
          >
            <Stack sx={{ pb: 12 }}>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="308" />
                  <col width="140" />
                  <col width="308" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div className="required">커뮤니티명</div>
                    </th>
                    <td>
                      <div>
                        <Stack direction="row">
                          <StyledTextField variant="standard" placeholder="커뮤니티명" required="true" fullWidth sx={{ mr: 2 }} />
                          <Buttons outlined variant="etc">
                            중복확인
                          </Buttons>
                        </Stack>
                      </div>
                    </td>
                    <th>
                      <div className="required">커뮤니티코드</div>
                    </th>
                    <td>
                      <div>
                        <StyledTextField variant="standard" placeholder="Default" required="true" fullWidth />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">커뮤니티유형</div>
                    </th>
                    <td>
                      <div>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              sx: {
                                "&& .Mui-selected": {
                                  backgroundColor: "action.hover",
                                  "&:hover": {
                                    backgroundColor: "action.hover",
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value="">
                              <em>전체</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </td>
                    <th>
                      <div className="required">게시판유형</div>
                    </th>
                    <td>
                      <div>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              sx: {
                                "&& .Mui-selected": {
                                  backgroundColor: "action.hover",
                                  "&:hover": {
                                    backgroundColor: "action.hover",
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value="">
                              <em>전체</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">리스트유형</div>
                    </th>
                    <td>
                      <div>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              sx: {
                                "&& .Mui-selected": {
                                  backgroundColor: "action.hover",
                                  "&:hover": {
                                    backgroundColor: "action.hover",
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value="">
                              <em>전체</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </td>
                    <th>
                      <div className="required">첨부파일사용여부</div>
                    </th>
                    <td>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="첨부파일사용여부" name="temp">
                            <FormControlLabel value="사용" control={<Radio disableRipple />} label="사용" />
                            <FormControlLabel value="미사용" control={<Radio disableRipple checked />} label="미사용" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">댓글가능여부</div>
                    </th>
                    <td>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="첨부파일사용여부" name="temp">
                            <FormControlLabel value="사용" control={<Radio disableRipple />} label="사용" />
                            <FormControlLabel value="미사용" control={<Radio disableRipple checked />} label="미사용" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </td>
                    <th>
                      <div className="required">다중댓글가능여부</div>
                    </th>
                    <td>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="첨부파일사용여부" name="temp">
                            <FormControlLabel value="사용" control={<Radio disableRipple />} label="사용" />
                            <FormControlLabel value="미사용" control={<Radio disableRipple checked />} label="미사용" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">답글가능여부</div>
                    </th>
                    <td>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="첨부파일사용여부" name="temp">
                            <FormControlLabel value="사용" control={<Radio disableRipple />} label="사용" />
                            <FormControlLabel value="미사용" control={<Radio disableRipple checked />} label="미사용" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </td>
                    <th>
                      <div className="required">출력순서</div>
                    </th>
                    <td>
                      <div>
                        <StyledTextField variant="standard" placeholder="Default" required="true" fullWidth />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <DialogActions disableSpacing>
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                <Buttons outlined variant="text">
                  삭제
                </Buttons>
                <Buttons outlined variant="text" onClick={closeDialog}>
                  닫기
                </Buttons>
                <Buttons primary variant="text" onClick={closeDialog} autoFocus>
                  수정모드 전환
                </Buttons>
              </Stack>
            </DialogActions>
          </Box>
        )}
        {pop03 && (
          <Box
            sx={{
              p: 8,
            }}
          >
            <Stack sx={{ pb: 12 }}>
              <table className="tableView">
                <colgroup>
                  <col width="140" />
                  <col width="308" />
                  <col width="140" />
                  <col width="308" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div className="required">업무구분</div>
                    </th>
                    <td>
                      <div>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              sx: {
                                "&& .Mui-selected": {
                                  backgroundColor: "action.hover",
                                  "&:hover": {
                                    backgroundColor: "action.hover",
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value="">
                              <em>전체</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </td>
                    <th>
                      <div className="required">중요</div>
                    </th>
                    <td>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="중요" name="temp">
                            <FormControlLabel value="사용" control={<Radio disableRipple />} label="사용" />
                            <FormControlLabel value="미사용" control={<Radio disableRipple checked />} label="미사용" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">제목</div>
                    </th>
                    <td colSpan="3">
                      <div>
                        <StyledTextField variant="standard" placeholder="Default" required="true" fullWidth />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="required">업무내용</div>
                    </th>
                    <td colSpan="3">
                      <div>
                        <StyledTextField multiline fullWidth rows="7" variant="standard" placeholder="업무내용" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>첨부파일</div>
                    </th>
                    <td colSpan="3">
                      <div>Drag & Drop 들어갈거에염</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <DialogActions disableSpacing>
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                <Buttons outlined variant="text" onClick={closeDialog}>
                  닫기
                </Buttons>
                <Buttons primary variant="text" onClick={closeDialog} autoFocus>
                  저장
                </Buttons>
              </Stack>
            </DialogActions>
          </Box>
        )}
        {pop04 && (
          <Box
            sx={{
              p: 8,
            }}
          >
            <Stack sx={{ pb: 12 }}>
              <Accordion disableGutters expanded={expanded === "panel1"} onChange={AccHandleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" sx={{ fontSize: "40px" }} />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography variant="subTitle1">요청 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack sx={{ pb: 10 }}>
                    <table className="tableView">
                      <colgroup>
                        <col width="140" />
                        <col width="308" />
                        <col width="140" />
                        <col width="308" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            <div className="required">업무구분</div>
                          </th>
                          <td>
                            <div>
                              <FormControl fullWidth>
                                <Select
                                  fullWidth
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  variant="outlined"
                                  IconComponent={KeyboardArrowDownIcon}
                                  MenuProps={{
                                    sx: {
                                      "&& .Mui-selected": {
                                        backgroundColor: "action.hover",
                                        "&:hover": {
                                          backgroundColor: "action.hover",
                                        },
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>전체</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </td>
                          <th>
                            <div className="required">업무명</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" required="true" fullWidth />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div>요청부서</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                          <th>
                            <div>요청자</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div>주담당자</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                          <th>
                            <div>부담당자</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div>요청일시</div>
                          </th>
                          <td colSpan="3">
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">업무내용</div>
                          </th>
                          <td colSpan="3">
                            <div>
                              <StyledTextField multiline fullWidth rows="3" variant="standard" placeholder="업무내용" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Stack>
                  <Typography variant="subTitle2">부가 정보 </Typography>
                  <Stack sx={{ pt: 4, pb: 10 }}>
                    <table className="tableView">
                      <colgroup>
                        <col width="140" />
                        <col width="308" />
                        <col width="140" />
                        <col width="308" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            <div>업무처리시작시간</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                          <th>
                            <div>업무처리마감시간</div>
                          </th>
                          <td>
                            <div>
                              <StyledTextField variant="standard" placeholder="Default" fullWidth />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">평균처리건수</div>
                          </th>
                          <td>
                            <div>
                              <Stack direction="row" alignItems="center">
                                <StyledTextField variant="standard" placeholder="Default" fullWidth sx={{ mr: 2 }} />
                                <Typography
                                  variant="inputSide"
                                  sx={{
                                    color: (theme) => theme.palette.grey[400],
                                    flexShrink: 0,
                                  }}
                                >
                                  건/회
                                </Typography>
                              </Stack>
                            </div>
                          </td>
                          <th>
                            <div className="required">평균수행시간</div>
                          </th>
                          <td>
                            <div>
                              <Stack direction="row" alignItems="center">
                                <StyledTextField variant="standard" placeholder="Default" fullWidth sx={{ mr: 2 }} />
                                <Typography
                                  variant="inputSide"
                                  sx={{
                                    color: (theme) => theme.palette.grey[400],
                                    flexShrink: 0,
                                  }}
                                >
                                  분
                                </Typography>
                              </Stack>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">수행횟수</div>
                          </th>
                          <td>
                            <div>
                              <Stack direction="row" alignItems="center">
                                <StyledTextField variant="standard" placeholder="Default" fullWidth sx={{ mr: 2 }} />
                                <Typography
                                  variant="inputSide"
                                  sx={{
                                    color: (theme) => theme.palette.grey[400],
                                    flexShrink: 0,
                                  }}
                                >
                                  회
                                </Typography>
                              </Stack>
                            </div>
                          </td>
                          <th>
                            <div className="required">수행인원</div>
                          </th>
                          <td>
                            <div>
                              <Stack direction="row" alignItems="center">
                                <StyledTextField variant="standard" placeholder="Default" fullWidth sx={{ mr: 2 }} />
                                <Typography
                                  variant="inputSide"
                                  sx={{
                                    color: (theme) => theme.palette.grey[400],
                                    flexShrink: 0,
                                  }}
                                >
                                  분
                                </Typography>
                              </Stack>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">수행주기</div>
                          </th>
                          <td colspan="3">
                            <div>
                              <FormControl
                                fullWidth
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "row",
                                }}
                              >
                                <Select
                                  sx={{ width: 110, mr: 2 }}
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  variant="outlined"
                                  IconComponent={KeyboardArrowDownIcon}
                                  MenuProps={{
                                    sx: {
                                      "&& .Mui-selected": {
                                        backgroundColor: "action.hover",
                                        "&:hover": {
                                          backgroundColor: "action.hover",
                                        },
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="">
                                    <em>전체</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <StyledTextField variant="standard" placeholder="Default" fullWidth />
                              </FormControl>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">업무내용</div>
                          </th>
                          <td colspan="3">
                            <div>
                              <Grid container sx={{ pl: 2 }} spacing={3}>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                              </Grid>
                              <StyledTextField variant="standard" placeholder="Default" sx={{ mt: 3, width: "250px" }} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div className="required">업무관련시스템</div>
                          </th>
                          <td colspan="3">
                            <div>
                              <Grid container sx={{ pl: 2 }} spacing={3}>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                                </Grid>
                              </Grid>
                              <StyledTextField variant="standard" placeholder="Default" sx={{ mt: 3, width: "250px" }} />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <div>첨부파일</div>
                          </th>
                          <td colspan="3">
                            <div>첨부파일</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters expanded={expanded === "panel2"} onChange={AccHandleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" sx={{ fontSize: "40px" }} />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography variant="subTitle1">개발진행중 </Typography>
                </AccordionSummary>
                <AccordionDetails>상세</AccordionDetails>
              </Accordion>
            </Stack>
            <DialogActions disableSpacing>
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                <Buttons primary variant="text" onClick={closeDialog} autoFocus>
                  닫기
                </Buttons>
              </Stack>
            </DialogActions>
          </Box>
        )}
      </DialogPop>
    </>
  );
}
