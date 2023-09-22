import React from "react"
import { Stack, Typography, TextField } from "@mui/material";
import Dropzone from "../components/Dropzone";
import { LuTrash, LuChevronUp, LuChevronDown } from "react-icons/lu";
import styled from "styled-components"




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



const SampleAddList = (props) => {

  return (
    <listTy01>
    {props.countList && props.countList.map((item, i) => (
      <Stack
        key={i}
        className="stepBox"
        direction="row"
        alignItems="center"
        sx={{
          p: 4,
          backgroundColor: "background.default",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="searchLabel"
          sx={{
            display: "block",
            pl: 4,
            pr: 8,
            flexShrink: 0,
          }}
        >
          Step 0{i+1}
        </Typography>
        <Dropzone />
        <StyledTextField
          multiline
          fullWidth
          rows={5}
          variant="standard"
          placeholder="내용이 들어갑니다"
          sx={{
            backgroundColor: "#fff",
            ml: 4,
            "& textarea": {
              boxSizing: "border-box",
              height: "106px !important",
            },
          }}
        />
        <Stack className="stepBtnSet" spacing={1} sx={{ ml: 2 }}>
          <button>
            <LuChevronUp />
          </button>
          <button>
            <LuChevronDown />
          </button>
          <button>
            <LuTrash />
          </button>
        </Stack>
      </Stack>
    ))}
    </listTy01>
    )  
}

export default SampleAddList