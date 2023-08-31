import * as React from 'react';
import { Box, Paper, Stack, TextField} from '@mui/material';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ButtonTitle from '../components/ButtonTitle';
import DataTable from '../components/DataTable';
import SearchBox from '../components/SearchBox';

import styled from '@emotion/styled';

import './Sub01.css';

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  // width: '100%',
  "& .MuiInputBase-root": {
    paddingLeft : 16,
    
    height: 40,
    border: '1px solid #e5e5e5',

  },
  "& .Mui-focused": {
    borderColor : '#3f8cff'
  },

});

export default function Sub01() {
  return(
    <>
    <Header />
    
    <Stack direction="row">
      <SideBar />
      <Box sx={{ p : 12, width: '100%', }}>
        <ButtonTitle />
        <Paper sx={{ mt : 5 }}>
          <SearchBox />
          <StyledTextField variant="standard" placeholder="dmdmdmdm" fullWidth />

        </Paper>

        <Paper sx={{ mt:10 , p:8 }}>
          <DataTable />
        </Paper>
      </Box>
      
    </Stack>
    </>    
  );
}