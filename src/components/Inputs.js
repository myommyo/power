import * as React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-root": {
    paddingLeft: 16,
    minHeight: 40,
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
  },
  "& .Mui-focused": {
    borderColor: "#202844 !important",
  },
  "& .Mui-disabled": {
    backgroundColor: "#f8f8f8",
    borderColor: "#e5e5e5",
    color: "#999",
  },
  "& .Mui-readOnly": {
    backgroundColor: "#f8f8f8",
    borderColor: "#e5e5e5",
    color: "#000",
    pointerEvents: "none",
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
