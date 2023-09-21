import * as React from "react";
import { Box, Paper, Stack, Typography, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UseSwitchesBasic from "../components/Switch";

import Paginations from "../components/Paginations";
import Buttons from "../components/Buttons";
import { LuPenSquare, LuRotateCcw, LuCheckSquare, LuEye, LuFile, LuTrash } from "react-icons/lu";

export const NoDataFound = () => (
  <Stack height="100%" alignItems="center" justifyContent="center">
    No data to display
  </Stack>
);

function createData(projectCode, projectName, projectType, projectPM, projectDateS, projectDateE) {
  return { projectCode, projectName, projectType, projectPM, projectDateS, projectDateE };
}

const rows = [
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

export default function Sub07() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="sectionTitle">프로세스그룹관리</Typography>
            </div>
            <Stack direction="row" spacing={2}>
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
            </Stack>
          </Stack>

          <Paper sx={{ mt: 3 }}>
            <Grid container alignItems="center" sx={{ m: 0, p: 6 }}>
              <Grid item xs={4}>
                <Box>
                  <Grid container alignItems="center">
                    <Grid item xs={4} sx={{ flexShrink: 0 }}>
                      <Box>
                        <Typography variant="searchLabel">사용자그룹명</Typography>
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
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 4 }}>
              <Stack className="tableSum" direction="row">
                page
                <div>
                  <strong>1</strong> / 2
                </div>
                (전체 14)
              </Stack>
              <Stack>
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
                        "&& .Mui-focusVisible": {
                          backgroundColor: "action.hover",
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
              </Stack>
            </Stack>
            <TableContainer
              component={Paper}
              sx={{
                border: "1px solid ",
                borderColor: "text.secondary",
                borderRadius: "12px",
              }}
            >
              <Table
                sx={{
                  minWidth: 650,
                  "& .MuiTableRow-root:hover": {
                    backgroundColor: "secondary.main",
                  },
                  "& .MuiTableRow-root:hover td": {
                    color: "#fff",
                  },
                  "& .MuiTableRow-root:hover th": {
                    color: "#fff",
                  },
                }}
              >
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        backgroundColor: "secondary.light",
                        color: "#fff",
                      },
                    }}
                  >
                    <TableCell align="center">프로젝트 코드</TableCell>
                    <TableCell align="center">프로젝트명</TableCell>
                    <TableCell align="center">프로젝트 타입</TableCell>
                    <TableCell align="center">프로젝트 담당자</TableCell>
                    <TableCell align="center">시작일자</TableCell>
                    <TableCell align="center">종료일자</TableCell>
                    <TableCell align="center">프로젝트 코드</TableCell>
                    <TableCell align="center">사용</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.projectCode}>
                      <TableCell component="th" scope="row" align="center">
                        {row.projectCode}
                      </TableCell>
                      <TableCell align="left">{row.projectName}</TableCell>
                      <TableCell align="center">{row.projectType}</TableCell>
                      <TableCell align="center">{row.projectPM}</TableCell>
                      <TableCell align="center">{row.projectDateS}</TableCell>
                      <TableCell align="center">{row.projectDateS}</TableCell>
                      <TableCell align="center">{row.projectDateS}</TableCell>
                      <TableCell align="center">
                        <UseSwitchesBasic />
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paginations />
          </Paper>

          <Stack direction="row" justifyContent="space-between" spacing={8} sx={{ mt: 8, flex: "1 1 auto" }}>
            <Paper
              sx={{
                flex: "0 1 100%",
                p: 8,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ pb: 4, borderBottom: "1px solid", borderColor: "primary" }}>
                <Typography variant="subTitle1">사용자 정보</Typography>
                <Stack direction="row">
                  <Buttons primary>
                    <LuCheckSquare />
                    추가
                  </Buttons>
                </Stack>
              </Stack>

              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ my: 4 }}>
                <Stack className="tableSum" direction="row">
                  page
                  <div>
                    <strong>1</strong> / 2
                  </div>
                  (전체 14)
                </Stack>
                <Stack>
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
                          "&& .Mui-focusVisible": {
                            backgroundColor: "action.hover",
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
                </Stack>
              </Stack>
              <TableContainer
                component={Paper}
                sx={{
                  border: "1px solid ",
                  borderColor: "text.secondary",
                  borderRadius: "12px",
                }}
              >
                <Table
                  sx={{
                    "& .MuiTableRow-root:hover": {
                      backgroundColor: "secondary.main",
                    },
                    "& .MuiTableRow-root:hover td": {
                      color: "#fff",
                    },
                    "& .MuiTableRow-root:hover th": {
                      color: "#fff",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        "& th": {
                          backgroundColor: "secondary.light",
                          color: "#fff",
                        },
                      }}
                    >
                      <TableCell align="center">프로젝트 코드</TableCell>
                      <TableCell align="center">프로젝트명</TableCell>
                      <TableCell align="center">프로젝트 타입</TableCell>
                      <TableCell align="center">프로젝트 담당자</TableCell>
                      <TableCell align="center">시작일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.projectCode}>
                        <TableCell component="th" scope="row" align="center">
                          {row.projectCode}
                        </TableCell>
                        <TableCell align="left">{row.projectName}</TableCell>
                        <TableCell align="center">{row.projectType}</TableCell>
                        <TableCell align="center">{row.projectPM}</TableCell>
                        <TableCell align="center">{row.projectDateS}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paginations />
            </Paper>
            <Paper
              sx={{
                flex: "0 1 100%",
                p: 8,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ pb: 4, borderBottom: "1px solid", borderColor: "primary" }}>
                <Typography variant="subTitle1">업무권한목록</Typography>
                <Stack direction="row">
                  <Buttons primary>
                    <LuCheckSquare />
                    추가
                  </Buttons>
                </Stack>
              </Stack>

              <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ my: 4 }}>
                <Stack className="tableSum" direction="row">
                  page
                  <div>
                    <strong>1</strong> / 2
                  </div>
                  (전체 14)
                </Stack>
                <Stack>
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
                          "&& .Mui-focusVisible": {
                            backgroundColor: "action.hover",
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
                </Stack>
              </Stack>
              <TableContainer
                component={Paper}
                sx={{
                  border: "1px solid ",
                  borderColor: "text.secondary",
                  borderRadius: "12px",
                }}
              >
                <Table
                  sx={{
                    "& .MuiTableRow-root:hover": {
                      backgroundColor: "secondary.main",
                    },
                    "& .MuiTableRow-root:hover td": {
                      color: "#fff",
                    },
                    "& .MuiTableRow-root:hover th": {
                      color: "#fff",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        "& th": {
                          backgroundColor: "secondary.light",
                          color: "#fff",
                        },
                      }}
                    >
                      <TableCell align="center">프로젝트 코드</TableCell>
                      <TableCell align="center">프로젝트명</TableCell>
                      <TableCell align="center">프로젝트 타입</TableCell>
                      <TableCell align="center">프로젝트 담당자</TableCell>
                      <TableCell align="center">시작일자</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow>
                        <TableCell
                          components={{
                            NoRowsOverlay: () => <NoDataFound />,
                          }}
                        ></TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paginations />
            </Paper>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
