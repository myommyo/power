import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "react-calendar/dist/Calendar.css"; // css import

function CalendarComp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box className="CalendarLegend" sx={{ position: "absolute", right: "0", top: "24px", zIndex: "1" }}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" className="dotList">
            <Box className="dot c01">
              <Typography sx={{ color: "common.textColor1" }}>총 실행 횟수</Typography>
            </Box>
            <Box className="dot c02" sx={{ ml: 3 }}>
              <Typography sx={{ color: "common.textColor1" }}>총 성공 횟수</Typography>
            </Box>
            <Box className="dot c03" sx={{ ml: 3 }}>
              <Typography sx={{ color: "common.textColor1" }}>총 실패 횟수</Typography>
            </Box>
          </Stack>
        </Box>
        <Calendar
          formatDay={(locale, date) => dayjs(date).format("D")}
          value={value}
          calendarType="gregory"
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          navigationLabel={null}
          selectRange={false}
          showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
          className="mx-auto w-full text-sm border-b"
          prev2Label={null}
          next2Label={null}
          tileContent={({ date, view }) => {
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            return (
              <>
                <div className="dotList">
                  <div className="dot c01">0</div>
                  <div className="dot c02">0</div>
                  <div className="dot c03">0</div>
                </div>
              </>
            );
          }}
        />
      </Box>
    </>
  );
}
export default CalendarComp;
