import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Grid, IconButton, TextField, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import DateRange from "./DateRangePicker";

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-root": {
    paddingLeft: 16,
    height: 40,
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
  },
  "& .Mui-focused": {
    borderColor: "#202844 !important",
  },
});

const SearchBox = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Grid container alignItems="center" sx={{ m: 0, p: 6 }}>
        <Grid item xs={4}>
          <Box>
            <Grid container alignItems="center">
              <Grid item xs={4} sx={{ flexShrink: 0 }}>
                <Box>
                  <Typography variant="searchLabel">프로젝트명</Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Stack direction="row">
                    <StyledTextField variant="standard" placeholder="프로젝트명" fullWidth />
                    <IconButton aria-label="Refresh" color="text" sx={{ ml: 1, width: "40px", height: "40px", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                      <CachedOutlinedIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ pl: 20 }}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="searchLabel">프로젝트 타입</Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Stack direction="row">
                    <StyledTextField variant="standard" placeholder="전체" fullWidth />
                    <IconButton aria-label="찾기" color="text" sx={{ ml: 1, width: "40px", height: "40px", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                      <SearchIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ pl: 20 }}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="searchLabel">제품 모델명</Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
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
                              backgroundColor: "action.hover",
                              "&:hover": {
                                backgroundColor: "action.hover",
                              },
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
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ pt: 4 }}>
          <Box>
            <Grid container alignItems="center">
              <Grid item xs={4} sx={{ flexShrink: 0 }}>
                <Box>
                  <Typography variant="searchLabel">프로젝트 담당자</Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Stack direction="row">
                    <StyledTextField variant="standard" placeholder="프로젝트 담당자" fullWidth />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ pl: 20, pt: 4 }}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Box>
                  <Typography variant="searchLabel">운영반영기간</Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Stack direction="row" alignItems="center">
                    <DateRange />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBox;
