import * as React from 'react';
import { Box, Paper, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import "./Home.css";
import ResponsiveGridLayout from '../components/layoutGrid' 


export default function Home() {
  return(
    <>
    <Header />
    <Stack direction="row">
      <SideBar />
        <Box sx={{ p : 12, width: '100%', mt : 20}}>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/sub01'}>Sub01</Link>
        </div>   

        <div>Home 페이지 입니다.</div>
        <Paper sx={{ mt : 5 }}>
          <ResponsiveGridLayout />
        </Paper>
      </Box>
    </Stack>

    </>
  );
}