import * as React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

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
  "& .Mui-disabled": {
    borderColor: "#202844",
  },
});

export default function Inputs() {
  return (
    <>
      <StyledTextField variant="standard" placeholder="메뉴아이콘" required="true" />

      <StyledTextField disabled variant="standard" placeholder="메뉴레벨" required="true" />
    </>
  );
}
