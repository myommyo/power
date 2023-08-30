import React from "react";
import { styled } from '@mui/material/styles';
import { Stack, Button, Typography, Grid, Paper, Input, InputBase, IconButton, TextField} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const ariaLabel = { 'aria-label': 'description' };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  backgroundColor : '#fff',
  color: theme.palette.text.primary,
}));

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

const SearchBox = () => {
  return (
    <>
    <CssBaseline />
    <Grid container   alignItems='center' spacing={20} sx={{ py : 6, px : 8 }} >
      <Grid item xs={4}>
        <Item>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" sx={{ flexShrink: 0 }}>
              <Typography variant="searchLabel">프로젝트명</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
            <StyledTextField variant="standard" placeholder="dmdmdmdm" fullWidth />
            <IconButton aria-label="delete" color="text" sx={{ ml: 1 , width: '40px', height : '40px', borderRadius: '4px', border: '1px solid #e5e5e5'}}>
              <CachedOutlinedIcon fontSize="inherit" />
            </IconButton>
            </Stack>
          </Stack>

        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Grid container alignItems="center">
            <Grid item xs={4} >
              <Item><Typography variant="searchLabel">프로젝트 타입</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack direction="row">
                <StyledTextField variant="standard" placeholder="dmdmdmdm" fullWidth />
                <IconButton aria-label="delete" color="text" sx={{ ml: 1 , width: '40px', height : '40px', borderRadius: '4px', border: '1px solid #e5e5e5'}}>
                  <CachedOutlinedIcon fontSize="inherit" />
                </IconButton>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={3}>
        <Item>xs=3</Item>
      </Grid>
    </Grid>

    
    </>  
  )
}

export default SearchBox