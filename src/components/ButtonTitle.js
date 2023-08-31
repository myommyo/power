import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const ButtonTitle = () => {
  return (
    <>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
     <div>
      <Typography variant="sectionTitle">RPA 변경관리(관리자)</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained" size='icon' startIcon={<DoneOutlinedIcon />}>일괄등록</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<ReplayOutlinedIcon />}>초기화</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<CreateOutlinedIcon />}>신규</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<RemoveRedEyeOutlinedIcon />}>조회</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<InsertDriveFileOutlinedIcon />}>엑셀</Button>
      </Stack>
    </Stack>
    
    </>  
  )
}

export default ButtonTitle