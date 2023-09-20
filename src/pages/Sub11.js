import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Avatar } from "@mui/material";

import Buttons from "../components/Buttons";

import StarRating from "../components/StarRating";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CiCircleInfo } from "react-icons/ci";

import CloseIcon from "@mui/icons-material/Close";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

//select
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Dropzone from "../components/Dropzone";
import { LuTrash } from "react-icons/lu";

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
                      <div>File / Work Center 들어갈예정</div>
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
                        <Stack
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
                            Step 01
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
                              <LuTrash />
                            </button>
                            <button>
                              <LuTrash />
                            </button>
                            <button>
                              <LuTrash />
                            </button>
                          </Stack>
                        </Stack>
                        <Stack
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
                            Step 02
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
                              <LuTrash />
                            </button>
                            <button>
                              <LuTrash />
                            </button>
                            <button>
                              <LuTrash />
                            </button>
                          </Stack>
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 6, mb: 3 }}>
                          <Buttons outlined variant="text">
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
