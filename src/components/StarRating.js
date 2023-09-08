import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const StyledStarRating = styled(Rating)({
  "& .MuiRating-icon": {
    fontSize: "60px",
    marginLeft: "-10px",
  },
  "& .MuiRating-iconFilled": {
    color: "#5d9eff",
  },
  "& .MuiRating-iconHover": {
    color: "#5d9eff",
    transform: "scale(1)",
  },
  "& .MuiRating-iconEmpty": {
    color: "#e5e5e5",
  },
});

export default function CustomizedRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledStarRating name="CustomizedRating" defaultValue={0} max={5} size="large" icon={<StarRoundedIcon fontSize="inherit" />} emptyIcon={<StarRoundedIcon fontSize="inherit" />} />
    </Box>
  );
}
