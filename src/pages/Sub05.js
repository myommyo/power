import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Stack, Typography, TextField, Button } from "@mui/material";

import Buttons from "../components/Buttons";
import { FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TreeMenu from "../components/TreeMenu";

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

export default function Sub05() {
  return (
    <>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Typography variant="sectionTitle">메뉴구성관리</Typography>
          <Stack direction="row" justifyContent="space-between" spacing={6} sx={{ mt: 4, flex: "1 1 auto" }}>
            {/* left */}
            <Stack
              sx={{
                flex: "0 0 280px",
              }}
            >
              <Paper sx={{ height: "100%", pt: 8, pl: 8 }}>
                <Typography variant="subtitle1" sx={{ mb: 7 }}>
                  메뉴정보
                </Typography>
                <TreeMenu />
              </Paper>
            </Stack>

            {/* right	 */}
            <Stack
              sx={{
                flex: "1 1 auto",
              }}
            >
              <Paper sx={{ "& .MuiTextField-root": { minWidth: "336px" }, py: 10, px: 8 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 4 }}>
                  <Typography variant="subtitle1">메뉴정보</Typography>
                  <Stack direction="row" spacing={2}>
                    <Buttons primary>
                      <FiCheckSquare />
                      하위메뉴추가
                    </Buttons>
                    <Buttons outlined>
                      <FiCheckSquare />
                      수정
                    </Buttons>
                    <Buttons outlined>
                      <RiDeleteBin7Line />
                      삭제
                    </Buttons>
                  </Stack>
                </Stack>
                <table className="tableView">
                  <colgroup>
                    <col width="140" />
                    <col width="*" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        <div className="required">상위메뉴명</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="상위메뉴명" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">메뉴명</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="메뉴명" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div>연관 메뉴아이디</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="Default" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">UI 라우터</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="UI 라우터" defaultValue="/gen/admin/menu/list" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">메뉴아이콘</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="메뉴아이콘" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">메뉴레벨</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField disabled variant="standard" placeholder="disabled" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">출력순서</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                            value="readOnly"
                            required="true"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">메뉴유형</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField variant="standard" placeholder="메뉴유형" defaultValue="일반" required="true" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div className="required">설명</div>
                      </th>
                      <td>
                        <div>
                          <StyledTextField multiline fullWidth rows="3" variant="standard" placeholder="각 게시판에 대한 간단한 설명글이 들어가는 영역입니다." required="true" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Paper>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
