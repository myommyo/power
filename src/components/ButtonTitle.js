import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonTitle = () => {
  return (
    <>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
     <div>
      <Typography variant="sectionTitle">RPA 변경관리(관리자)</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained" size='icon' startIcon={<DeleteIcon />}>일괄등록</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<DeleteIcon />}>초기화</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<DeleteIcon />}>신규</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<DeleteIcon />}>조회</Button>
        <Button color="primary" variant="outlined" size='icon' startIcon={<DeleteIcon />}>엑셀</Button>
      </Stack>
    </Stack>
    
    </>  
  )
}

export default ButtonTitle