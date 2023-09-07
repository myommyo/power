import { useEffect, useRef, useState } from 'react';
import { DateRange  } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalendarRangComp = () => {

  //달력 초기 셋팅 값
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  // 달력 열고 닫기
  const [open, setOpen] = useState(false)

  // 타겟 element 토글
  const refOne = useRef(null)

  useEffect(()=>{
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  },[])
  
  //esc 키보드 누를때 달력 닫기
  const hideOnEscape = (e) => {
    if(e.key === "Escape"){
      setOpen(false)
    }
  }

  // 타겟이 달력부분이 아닐때 달력 닫기
  const hideOnClickOutside = (e) => {
    console.log(refOne.current)
    console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }

  return(
    <div className='calendarWrap'>
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
      />
      <input
        value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
      />      


    <div ref={refOne}>
      {open &&
        <DateRange  
          onChange={item => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
          className="calendarElement"
        />
      }
      </div>
    </div>
  )
}
export default CalendarRangComp;