import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField } from "@mui/material";

import Buttons from "../components/Buttons";
import StarRating from "../components/StarRating";
import MenuItem from "@mui/material/MenuItem";

//select
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Dropzone from "../components/Dropzone";
import { LuTrash, LuChevronUp, LuChevronDown } from "react-icons/lu";

//search
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { RiSearchLine } from "react-icons/ri";

import { TbX } from "react-icons/tb";

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
export default function Sub11() {
  //리스트 추가
  const [countList, setCountList] = useState([0]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

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

          <Paper
            sx={{
              p: 8,
              mt: 4,
              "& .tableView": {
                tableLayout: "fixed !important",
              },
            }}
          >
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
                        <StarRating readOnly={false} defaultValue={2} />
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
                      <div>
                        <StyledTextField variant="standard" placeholder="한글 최대 20자 까지 입력" sx={{ width: "336px" }} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>RPA 제품</div>
                    </th>
                    <td>
                      <div>
                        <FormControl
                          sx={{
                            width: "336px",
                          }}
                        >
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
                      <div>
                        <FormControl
                          sx={{
                            width: "336px",
                          }}
                        >
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
                      <div>대상 어플리케이션</div>
                    </th>
                    <td>
                      <div>
                        <FormControl
                          sx={{
                            width: "336px",
                          }}
                        >
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
                      <div>실행구분</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <FormControl component="fieldset">
                          <RadioGroup row aria-label="실행구분" defaultValue="File" name="radio-buttons-group">
                            <FormControlLabel value="File" control={<BpRadio />} label="File" />
                            <FormControlLabel sx={{ pl: 2 }} value="Work Center" control={<BpRadio />} label="Work Center" />
                          </RadioGroup>
                        </FormControl>

                        <Stack direction="row" alignItems="center">
                          <Box component="form" sx={{ display: "flex", alignItems: "center", width: "336px", height: "40px", pl: 4, pr: 3, border: "1px solid", borderColor: "text.secondary", borderRadius: "4px" }}>
                            <InputBase sx={{ flex: 1 }} placeholder="업로드할 파일을 선택하세요." inputProps={{ "aria-label": "업로드할 파일을 선택하세요." }} />
                            <IconButton disableRipple color="primary" type="submit" aria-label="search" sx={{ marginRight: "-10px" }}>
                              <RiSearchLine sx={{ fontSize: "18px" }} />
                            </IconButton>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              width: "336px",
                              height: "40px",
                              pl: 4,
                              pr: 3,
                              ml: 3,
                              border: "1px solid",
                              borderColor: "text.secondary",
                              borderRadius: "4px",
                            }}
                          >
                            <Typography>NaverNewsBot.exe</Typography>
                            <IconButton
                              disableRipple
                              sx={{
                                ml: 2,
                                borderRadius: "100%",
                                p: "2px",
                                backgroundColor: "#ddd",
                                "& svg": {
                                  fontSize: "10px",
                                  color: "common.main",
                                },
                              }}
                              aria-label="menu"
                            >
                              <TbX />
                            </IconButton>
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
                        <Box
                          sx={{
                            border: "1px solid",
                            borderColor: "text.secondary",
                            minHeight: "158px",
                            borderRadius: "4px",
                          }}
                        >
                          에디터영역
                        </Box>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>장점</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <Box
                          sx={{
                            border: "1px solid",
                            borderColor: "text.secondary",
                            minHeight: "158px",
                            borderRadius: "4px",
                          }}
                        >
                          에디터영역
                        </Box>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>대표이미지</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <Box className="thumbNail">
                          <Dropzone />
                        </Box>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div>실행방법</div>
                    </th>
                    <td colSpan={3}>
                      <div>
                        <listTy01 countList={countList}>
                          {countList &&
                            countList.map((item, i) => (
                              <Stack
                                key={i}
                                className="stepBox"
                                direction="row"
                                alignItems="center"
                                sx={{
                                  p: 4,
                                  backgroundColor: "background.default",
                                  borderRadius: "12px",
                                }}
                              >
                                <Typography
                                  variant="searchLabel"
                                  sx={{
                                    display: "block",
                                    pl: 4,
                                    pr: 8,
                                    flexShrink: 0,
                                  }}
                                >
                                  Step 0{i + 1}
                                </Typography>
                                <Dropzone />
                                <StyledTextField
                                  multiline
                                  fullWidth
                                  rows={5}
                                  variant="standard"
                                  placeholder="내용이 들어갑니다"
                                  sx={{
                                    backgroundColor: "#fff",
                                    ml: 4,
                                    "& textarea": {
                                      boxSizing: "border-box",
                                      height: "106px !important",
                                    },
                                  }}
                                />
                                <Stack className="stepBtnSet" spacing={1} sx={{ ml: 2 }}>
                                  <button>
                                    <LuChevronUp />
                                  </button>
                                  <button>
                                    <LuChevronDown />
                                  </button>
                                  <button>
                                    <LuTrash />
                                  </button>
                                </Stack>
                              </Stack>
                            ))}
                        </listTy01>

                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 6, mb: 3 }}>
                          <Buttons outlined variant="text" onClick={onAddDetailDiv}>
                            + 순서 추가
                          </Buttons>
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
                작성
              </Buttons>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
