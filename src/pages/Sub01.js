import * as React from 'react';
import { Box, Paper, Stack} from '@mui/material';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ButtonTitle from '../components/ButtonTitle';
import Table from '../components/Table';
import SearchBox from '../components/SearchBox';
import Paginations from '../components/Paginations';

import './Sub01.css';


export default function Sub01() {
  return(
    <>
    <Header />
    
    <Stack direction="row">
      <SideBar />
      <Box sx={{ p : 12, width: '100%', mt : 20}}>
        <div>
          <ButtonTitle />
        </div>
        <Paper sx={{ mt : 5 }}>
          <SearchBox />
        </Paper>

        <Paper sx={{ mt:10 , p:8 }}>
          <Table />
          <Paginations />
        </Paper>
      </Box>
      
    </Stack>
    </>    
  );
}