import React, { useState } from "react";
import { Box, Grid, Stack, Typography, TextField, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile, LuTrash, LuPlus } from "react-icons/lu";
import { PiInfoThin } from "react-icons/pi";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Checkbox from "@mui/material/Checkbox";

import UseSwitchesBasic from "../components/Switch";
import StarRating from "../components/StarRating";

//Drag & Drop
import Dropzone from "../components/Dropzone";

//daterange
import DateRange from "../components/DateRangePicker";

// radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

//팝업 사용하는 애들
import Button from "@mui/material/Button";
import DialogPop from "../components/DialogPop";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

var pop01;
var pop02;
var pop03;
var pop04;

//Radio
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow: theme.palette.mode === "dark" ? "0 0 0 1px rgb(16 22 26 / 40%)" : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#fff",
  backgroundImage: theme.palette.mode === "dark" ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))" : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {},
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "#000" : "#f8f8f8",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#000" : "#e5e5e5",
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000" : "#202844",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#202844",
  },
  "input:disabled  ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#f8f8f8",
    "&:before": {
      display: "block",
      width: 18,
      height: 18,
      backgroundImage: "radial-gradient(#e5e5e5,#e5e5e5 28%,transparent 32%)",
    },
  },
}));

function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function Sample() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogName, setDialogName] = useState("");
  const [size, setSize] = useState("");

  const openDialog = (pop) => {
    setIsDialogOpen(true);
    //클릭한 타겟의 name 가져오기

    //클릭한 타겟의 pop 구분 가져오기
    if (pop == "pop01") {
      pop01 = true;
      pop02 = false;
      pop03 = false;
      pop04 = false;
      setSize("sm");
    } else if (pop == "pop02") {
      pop01 = false;
      pop02 = true;
      pop03 = false;
      pop04 = false;
      setSize("lg");
    } else if (pop == "pop03") {
      pop01 = false;
      pop02 = false;
      pop03 = true;
      pop04 = false;
      setSize("lg");
    } else if (pop == "pop04") {
      pop01 = false;
      pop02 = false;
      pop03 = false;
      pop04 = true;
      setSize("lg");
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

  const InputAdornment = styled(Typography)({
    "&.MuiTypography-root": {
      color: "#999",
      paddingRight: "16px",
      flexShrink: "0",
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
        <Box sx={{ p: 12, width: "100%" }}>
          <Paper sx={{ mt: 16, p: 8 }}>
            <Box>
              <Typography variant="subTitle1">Buttons</Typography>
              <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
                <Buttons primary>Primary</Buttons>
                <Buttons primary disabled>
                  Primary Disabled
                </Buttons>
                <Buttons outlined>Outlined</Buttons>
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

                <Buttons primary variant="etc2">
                  smaller
                </Buttons>
                <Buttons primary variant="etc2" disabled>
                  smaller Disabled
                </Buttons>

                <Buttons outlined variant="etc2">
                  smaller 대댓글에 사용
                </Buttons>
                <Buttons outlined variant="etc2" disabled>
                  smaller 대댓글에 사용 Disabled
                </Buttons>

                <Buttons outlined variant="etc">
                  Etc
                </Buttons>
                <Buttons outlined variant="etc" disabled>
                  Etc Disabled
                </Buttons>
              </Stack>

              <Typography variant="subTitle2">Button Sample</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
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
                <Buttons outlined>
                  <LuTrash />
                  삭제
                </Buttons>
                <Buttons outlined>
                  <LuPlus />
                  영역추가
                </Buttons>
              </Stack>
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Input Checkbox</Typography>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
                <FormControlLabel control={<Checkbox disableRipple />} label="Default" />
                <FormControlLabel control={<Checkbox defaultChecked disableRipple />} label="Checked " />
                <FormControlLabel disabled control={<Checkbox disableRipple />} label="Disabled" />
                <FormControlLabel disabled control={<Checkbox defaultChecked disableRipple />} label="Disabled Checked" />
              </Stack>
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Radio Button</Typography>
              <Box>
                <FormControl component="fieldset">
                  <RadioGroup row defaultValue="" aria-label="Default" name="customized-radios">
                    <FormControlLabel value="Default" control={<BpRadio />} label="Default" />
                    <FormControlLabel value="Checked" control={<BpRadio checked />} label="Checked" />
                    <FormControlLabel value="Disabled" disabled control={<BpRadio disabled />} label="Disabled" />
                    <FormControlLabel value="disabled" disabled checked control={<BpRadio checked />} label="Disabled Checked" />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Input Text</Typography>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
                <StyledTextField variant="standard" placeholder="상위메뉴명" required="true" />
                <StyledTextField disabled variant="standard" placeholder="disabled" required="true" />
                <StyledTextField
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  value="readOnly"
                  required="true"
                />
              </Stack>
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Switch</Typography>
              <UseSwitchesBasic />
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Star Rating</Typography>
              <StarRating />
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Date Range</Typography>
              <DateRange />
            </Box>

            <Box sx={{ mt: 8 }}>
              <Typography variant="subTitle1">Modal</Typography>
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
          </Paper>
        </Box>
      </Stack>

      <DialogPop isOpen={isDialogOpen} closeDialog={closeDialog} maxWidth={size}>
        {pop01 && (
          <Box>
            <DialogTitle>
              <Typography variant="sectionTitle">워크센터 프로세스</Typography>
            </DialogTitle>
            <Stack sx={{ p: 8, pb: 12 }}>
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
            <DialogActions disableSpacing sx={{ p: 0, pb: 8 }}>
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
          <Box>
            <DialogTitle>
              <Typography variant="sectionTitle">커뮤니티 관리상세</Typography>
            </DialogTitle>
            <Stack sx={{ p: 8, pb: 12 }}>
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
                          <RadioGroup row defaultValue="사용" aria-label="Default" name="customized-radios">
                            <FormControlLabel value="사용" control={<BpRadio />} label="사용" />
                            <FormControlLabel value="미사용" control={<BpRadio />} label="미사용" />
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
                          <RadioGroup row defaultValue="사용" aria-label="Default" name="customized-radios">
                            <FormControlLabel value="사용" control={<BpRadio />} label="사용" />
                            <FormControlLabel value="미사용" control={<BpRadio />} label="미사용" />
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
                          <RadioGroup row defaultValue="사용" aria-label="Default" name="customized-radios">
                            <FormControlLabel value="사용" control={<BpRadio />} label="사용" />
                            <FormControlLabel value="미사용" control={<BpRadio />} label="미사용" />
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
                          <RadioGroup row defaultValue="사용" aria-label="Default" name="customized-radios">
                            <FormControlLabel value="사용" control={<BpRadio />} label="사용" />
                            <FormControlLabel value="미사용" control={<BpRadio />} label="미사용" />
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
            <DialogActions disableSpacing sx={{ p: 0, pb: 8 }}>
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
          <Box>
            <DialogTitle>
              <Typography variant="sectionTitle">업무상세</Typography>
            </DialogTitle>
            <Stack sx={{ p: 8, pb: 12 }}>
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
                          <RadioGroup row defaultValue="사용" aria-label="Default" name="customized-radios">
                            <FormControlLabel value="사용" control={<BpRadio />} label="사용" />
                            <FormControlLabel value="미사용" control={<BpRadio />} label="미사용" />
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
                      <div>
                        <Stack>
                          <Dropzone />
                        </Stack>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
            <DialogActions disableSpacing sx={{ p: 0, pb: 8 }}>
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
          <Box>
            <DialogTitle>
              <Typography variant="sectionTitle">업무상세</Typography>
            </DialogTitle>
            <Stack sx={{ p: 8, pb: 12 }}>
              <DialogContent sx={{ p: 0 }}>
                <DialogContentText>
                  <Stack>
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
                                    <StyledTextField
                                      variant="standard"
                                      placeholder="Default"
                                      fullWidth
                                      sx={{ mr: 2 }}
                                      InputProps={{
                                        endAdornment: <InputAdornment position="end">건/회</InputAdornment>,
                                      }}
                                    />
                                  </div>
                                </td>
                                <th>
                                  <div className="required">평균수행시간</div>
                                </th>
                                <td>
                                  <div>
                                    <StyledTextField
                                      variant="standard"
                                      placeholder="Default"
                                      fullWidth
                                      sx={{ mr: 2 }}
                                      InputProps={{
                                        endAdornment: <InputAdornment position="end">분</InputAdornment>,
                                      }}
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <div className="required">수행횟수</div>
                                </th>
                                <td>
                                  <div>
                                    <StyledTextField
                                      variant="standard"
                                      placeholder="Default"
                                      fullWidth
                                      InputProps={{
                                        endAdornment: <InputAdornment position="end">회</InputAdornment>,
                                      }}
                                    />
                                  </div>
                                </td>
                                <th>
                                  <div className="required">수행인원</div>
                                </th>
                                <td>
                                  <div>
                                    <StyledTextField
                                      variant="standard"
                                      placeholder="Default"
                                      fullWidth
                                      InputProps={{
                                        endAdornment: <InputAdornment position="end">분</InputAdornment>,
                                      }}
                                    />
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
                            </tbody>
                          </table>
                          <Stack direction="row" alignItems="center" sx={{ mt: 4 }}>
                            <PiInfoThin />
                            <Typography sx={{ ml: 1 }} color="text.disabled">
                              실제 로봇 수행 시간은 변경될 수 있습니다.
                            </Typography>
                          </Stack>
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
                </DialogContentText>
              </DialogContent>
            </Stack>
            <DialogActions disableSpacing sx={{ p: 0, pb: 8 }}>
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
