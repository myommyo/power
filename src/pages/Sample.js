import React, { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";

import Buttons from "../components/Buttons";
import { FiCheckSquare } from "react-icons/fi";
import { BsPencilSquare, BsEye } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

//팝업 사용하는 애들
import Button from '@mui/material/Button';
import DialogPop from '../components/DialogPop';
import Typography from "@mui/material/Typography";
import DialogActions from '@mui/material/DialogActions';

var pop01;
var pop02;
var pop03;


export default function Sample() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogName, setDialogName] = useState('');
  
  const openDialog = (pop) => {
    setIsDialogOpen(true);
    //클릭한 타겟의 name 가져오기
   
    //클릭한 타겟의 pop 구분 가져오기
    if(pop == 'pop01'){
      pop01 = true;
      pop02 = false;
      pop03 = false;
    } else if(pop == 'pop02'){
      pop01 = false;
      pop02 = true;
      pop03 = false;
    } else if(pop == 'pop03'){
      pop01 = false;
      pop02 = false;
      pop03 = true;
    }
  }
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <Box>
            <Buttons primary>Primary</Buttons>
            <Buttons primary disabled>
              Primary Disabled
            </Buttons>
            <Buttons outlined>
              <FiCheckSquare />
              Outlined
            </Buttons>
            <Buttons outlined disabled>
              Outlined Disabled
            </Buttons>

            <Buttons primary variant="text">
              Text
            </Buttons>
            <Buttons primary variant="text" disabled>
              Text Disabled
            </Buttons>

            <Buttons outlined variant="etc">
              Etc
            </Buttons>
            <Buttons outlined variant="etc" disabled>
              Etc Disabled
            </Buttons>
          </Box>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
            <Buttons primary>
              <FiCheckSquare />
              일괄등록
            </Buttons>
            <Buttons outlined>
              <PiArrowCounterClockwiseBold />
              초기화
            </Buttons>
            <Buttons outlined>
              <BsPencilSquare />
              신규
            </Buttons>
            <Buttons outlined>
              <BsEye />
              조회
            </Buttons>
            <Buttons outlined>
              <IoDocumentOutline />
              엑셀
            </Buttons>
          </Stack>
          <Box>
          <Button onClick={() => openDialog('pop01')}>
            팝업1
          </Button>
          <Button onClick={() =>openDialog('pop02')}>
            팝업2
          </Button>
          <Button onClick={() =>openDialog('pop03')}>
            팝업3
          </Button>
          </Box>
        </Box>
      </Stack>



      <DialogPop
        isOpen={isDialogOpen}
        closeDialog={closeDialog}
        title={'타이틀 영역'}
      >
      {pop01 && 
        <Box>
          <Typography variant="h6" component="h2">
            안녕하세요
          </Typography>
          <Typography sx={{ mt: 2 }}>
            컨텐츠 1 영역입니다.
          </Typography>
          <DialogActions>
            <Button onClick={closeDialog}>1번 버튼</Button>
            <Button onClick={closeDialog} autoFocus>1번 버튼이다</Button>
          </DialogActions>        
        </Box>
      }
      {pop02 && 
        <Box>
          <Typography variant="h6" component="h2">
            안녕하세요
          </Typography>
          <Typography sx={{ mt: 2 }}>
            컨텐츠 2 영역입니다.
          </Typography>
          <DialogActions>
            <Button onClick={closeDialog}>2번 버튼</Button>
            <Button onClick={closeDialog} autoFocus>2번 버튼이다</Button>
          </DialogActions>                
        </Box>
      }
      {pop03 && 
        <Box>
          <Typography variant="h6" component="h2">
            안녕하세요
          </Typography>
          <Typography sx={{ mt: 2 }}>
            컨텐츠 3 영역입니다.
          </Typography>
          <DialogActions>
            <Button onClick={closeDialog}>3번 버튼</Button>
            <Button onClick={closeDialog} autoFocus>3번 버튼이다</Button>
          </DialogActions>    
        </Box>
      }
      </DialogPop>

    </>
  );
}
