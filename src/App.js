import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import theme from './assets/js/Theme';
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import SettingsBackupRestoreOutlinedIcon from '@mui/icons-material/SettingsBackupRestoreOutlined';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container>
        <Button color="primary" variant="contained" size="medium">
          Primary contained
        </Button>
        <Button color="primary" variant="outlined" size="medium">
          Primary outlined
        </Button>
        <Button color="secondary" size="medium" variant="outlined">
          Secondary Outlined
        </Button>
        <Button color="primary" variant="contained" disabled>
          disabled contained
        </Button>
          <Grid item><Button color="secondary" variant='contained' startIcon={<TaskAltSharpIcon />}>일괄등록</Button></Grid>
          <Grid item><Button color="secondary" variant='outlined' startIcon={<SettingsBackupRestoreOutlinedIcon />}>초기화</Button></Grid>
          <Grid item><Button color="secondary" variant='outlined' startIcon={<EditNoteSharpIcon />}>신규</Button></Grid>
          <Grid item><Button color="secondary" variant='outlined' startIcon={<RemoveRedEyeOutlinedIcon />}>조회</Button></Grid>
          <Grid item><Button color="secondary" variant='outlined' startIcon={<InsertDriveFileOutlinedIcon />}>엑셀</Button></Grid>
          
        </Grid>
      </Container>
    </ThemeProvider>
  );
}