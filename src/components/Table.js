import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styled from "@emotion/styled";

function createData(projectCode, projectName, projectType, projectPM, projectDateS, projectDateE) {
  return { projectCode, projectName, projectType, projectPM, projectDateS, projectDateE };
}

const rows = [
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
  createData("2223", "프로젝트코드", "유지보수", "프로젝트 담당자", "2023-08-30", "2023-08-30"),
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

export default function BasicTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
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
        <TableContainer component={Paper}>
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
                  "& th:first-child": {
                    borderRadius: "12px 0 0 0",
                  },
                  "& th:last-child": {
                    borderRadius: "0 12px 0 0",
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
