import React, { useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import Typography from "@mui/material/Typography";

const array = ["one", "two", "three"];

const SideBar = ({ setOpen }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setListOpen] = useState(false);

  return (
    <>
      {/* <div className={"sideBar " + (setOpen ? 'sideClose' : 'sideOpen')}> */}
      <div className="sideBar">
        <div className="sideBarFixed">
          <div className="logo">
            <h1>파워젠</h1>
          </div>
          <div className="sideBarInner">
            <Accordion className="sideBarList01" expanded={expanded === "panel1"} onChange={handleChange("panel1")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography variant="sideBarHeader">마이페이지</Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion className="sideBarList02" expanded={expanded === "panel2"} onChange={handleChange("panel2")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography variant="sideBarHeader">대시보드</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <ListItemButton onClick={() => setListOpen(true)}>
                      <ListItemIcon>{">"}</ListItemIcon>
                      <ListItemText primary={"list open"} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Collapse in={open}>
                  <List>
                    {array.map((listElm) => (
                      <ListItem>
                        <ListItemButton onClick={() => setListOpen(false)}>
                          <ListItemIcon>{">"}</ListItemIcon>
                          <ListItemText primary={listElm} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList03" expanded={expanded === "panel3"} onChange={handleChange("panel3")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography variant="sideBarHeader">아이디어관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList04" expanded={expanded === "panel4"} onChange={handleChange("panel4")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
                <Typography variant="sideBarHeader">프로젝트 관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList05" expanded={expanded === "panel5"} onChange={handleChange("panel5")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel5bh-content" id="panel5bh-header">
                <Typography variant="sideBarHeader">RPA 업무관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList06" expanded={expanded === "panel6"} onChange={handleChange("panel6")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel6bh-content" id="panel6bh-header">
                <Typography variant="sideBarHeader">RPA 변경관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList07" expanded={expanded === "panel7"} onChange={handleChange("panel7")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel7bh-content" id="panel4bh-header">
                <Typography variant="sideBarHeader">실행관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList08" expanded={expanded === "panel8"} onChange={handleChange("panel8")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel8bh-content" id="panel4bh-header">
                <Typography variant="sideBarHeader">모니터링&현황</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList09" expanded={expanded === "panel9"} onChange={handleChange("panel9")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel9bh-content" id="panel9bh-header">
                <Typography variant="sideBarHeader">커뮤니티</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList10" expanded={expanded === "panel10"} onChange={handleChange("panel10")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel10bh-content" id="panel10bh-header">
                <Typography variant="sideBarHeader">시스템관리</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sideBarList11" expanded={expanded === "panel11"} onChange={handleChange("panel11")} disableGutters={true} square={true}>
              <AccordionSummary aria-controls="panel11bh-content" id="panel11bh-header">
                <Typography variant="sideBarHeader">마이페이지</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>디테일이어요</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
