import React from "react";
import { styled } from '@mui/material/styles';
import { Stack, Typography, Grid, Paper, IconButton, TextField} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  "& .MuiInputBase-root": {
    paddingLeft : 16,
    height: 40,
    border: '1px solid #e5e5e5',
    borderRadius : '4px',

  },
  "& .Mui-focused": {
    borderColor : '#202844'
  },

});



const SearchBox = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <CssBaseline />
    <Grid container alignItems='center' sx={{m : 0 , p : 6}} >
      <Grid item xs={4}>
        <Item>
          <Grid container alignItems="center">
            <Grid item xs={4} sx={{ flexShrink: 0 }}>
              <Item ><Typography variant="searchLabel">프로젝트명</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack direction="row">
                <StyledTextField variant="standard" placeholder="프로젝트명" fullWidth />
                <IconButton aria-label="Refresh" color="text" sx={{ ml: 1 , width: '40px', height : '40px', borderRadius: '4px', border: '1px solid #e5e5e5'}}>
                  <CachedOutlinedIcon fontSize="inherit" />
                </IconButton>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item sx={{ pl : 20 }}>
          <Grid container alignItems="center">
            <Grid item xs={4} >
              <Item><Typography variant="searchLabel">프로젝트 타입</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack direction="row">
                <StyledTextField variant="standard" placeholder="전체" fullWidth />
                <IconButton aria-label="찾기" color="text" sx={{ ml: 1 , width: '40px', height : '40px', borderRadius: '4px', border: '1px solid #e5e5e5'}}>
                  <SearchIcon fontSize="inherit" />
                </IconButton>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item  sx={{ pl : 20 }}>
          <Grid container alignItems="center">
            <Grid item xs={4} >
              <Item><Typography variant="searchLabel">제품 모델명</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                
                <Stack direction="row">                  
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
                          backgroundColor: 'action.hover'
                        }
                      }
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
                
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>      
      <Grid item xs={4} sx={{pt:4}}>
       <Item>
          <Grid container alignItems="center">
            <Grid item xs={4} sx={{ flexShrink: 0 }}>
              <Item ><Typography variant="searchLabel">프로젝트 담당자</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack direction="row">
                  <StyledTextField variant="standard" placeholder="프로젝트 담당자" fullWidth />
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      {/* <Grid item xs={4}>
        <Item sx={{ pl : 20 , pt : 4 }}>
          <Grid container alignItems="center">
            <Grid item xs={4} >
              <Item><Typography variant="searchLabel">운영반영기간</Typography></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack direction="row">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid> */}
    </Grid>

    
    </>  
  )
}

export default SearchBox