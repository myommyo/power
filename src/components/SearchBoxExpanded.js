import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography, Grid, Paper, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
}));

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
    borderColor: "#202844",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card sx={{ m: 0, pt: 6, pb: 6 }}>
      <CardContent sx={{ m: 0, p: 0 }}>
        <CssBaseline />
        <Grid container alignItems="center" sx={{ m: 0, pl: 6, pr: 6 }}>
          <Grid item xs={4}>
            <Item>
              <Grid container alignItems="center">
                <Grid item xs={4} sx={{ flexShrink: 0 }}>
                  <Item>
                    <Typography variant="searchLabel">프로젝트명</Typography>
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>
                    <Stack direction="row">
                      <StyledTextField variant="standard" placeholder="프로젝트명" fullWidth />
                      <IconButton aria-label="Refresh" color="text" sx={{ ml: 1, width: "40px", height: "40px", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                        <CachedOutlinedIcon fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ pl: 20 }}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography variant="searchLabel">프로젝트 타입</Typography>
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>
                    <Stack direction="row">
                      <StyledTextField variant="standard" placeholder="전체" fullWidth />
                      <IconButton aria-label="찾기" color="text" sx={{ ml: 1, width: "40px", height: "40px", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                        <SearchIcon fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ pl: 20 }}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography variant="searchLabel">제품 모델명</Typography>
                  </Item>
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
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container alignItems="center" sx={{ m: 0, pl: 6, pr: 6 }}>
          <Grid item xs={4} sx={{ pt: 4 }}>
            <Item>
              <Grid container alignItems="center">
                <Grid item xs={4} sx={{ flexShrink: 0 }}>
                  <Item>
                    <Typography variant="searchLabel">프로젝트 담당자</Typography>
                  </Item>
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
          <Grid item xs={4}>
            <Item sx={{ pl: 20, pt: 4 }}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Item>
                    <Typography variant="searchLabel">운영반영기간</Typography>
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>
                    <Stack direction="row" alignItems="center">
                      {/* <DateRange editableDateInputs={true} onChange={(item) => setState([item.selection])} moveRangeOnFirstSelection={false} ranges={state} /> */}
                    </Stack>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Collapse>

      <Stack
        sx={{
          boxSizing: "border-box",
          width: "56px",
          height: "20px",
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "-20px",
          margin: "auto",
          backgroundColor: "#fff",
        }}
      >
        <ExpandMore disableRipple="true" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="더보기" sx={{ p: 0, m: 0, borderRadius: "0" }}>
          <ExpandMoreIcon color="primary" sx={{ p: 0, m: 0 }} />
        </ExpandMore>
      </Stack>
    </Card>
  );
}
