import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(projectCode, projectName, projectType, projectPM, projectDateS, projectDateE ) {
  return { projectCode, projectName, projectType, projectPM, projectDateS, projectDateE };
}

const rows = [
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
  createData("2223", '프로젝트코드', '유지보수', '프로젝트 담당자', '2023-08-30', '2023-08-30'),
];


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableRow-root:hover": {
            backgroundColor: "secondary.main",                        
          },
          "& .MuiTableRow-root:hover td": {
            color : '#fff'
          },
          "& .MuiTableRow-root:hover th": {
            color : '#fff'
          }
        }}
      >
        <TableHead>
          <TableRow
           sx={{
            "& th": {
              backgroundColor:'secondary.light', 
              color: '#fff',              
            }
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
            <TableRow key={row.projectCode} >
              <TableCell component="th" scope="row" align="center">
                {row.projectCode}
              </TableCell>
              <TableCell align="left">{row.projectName}</TableCell>
              <TableCell align="center">{row.projectType}</TableCell>
              <TableCell align="center">{row.projectPM}</TableCell>
              <TableCell align="center">{row.projectDateS}</TableCell>
              <TableCell align="center">{row.projectDateS}</TableCell>
              <TableCell align="center">{row.projectDateS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
