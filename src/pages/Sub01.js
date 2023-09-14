import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";

import ButtonTitle from "../components/ButtonTitle";
import Table from "../components/Table";
import Paginations from "../components/Paginations";
import SearchBoxExpanded from "../components/SearchBoxExpanded";

import "./Sub01.css";

export default function Sub01() {
  return (
    <>
      <Stack direction="row">
        <Box sx={{ p: 12, width: "100%", mt: 20 }}>
          <div>
            <ButtonTitle />
          </div>

          <Paper sx={{ mt: 5, position: "relative" }}>
            <SearchBoxExpanded />
          </Paper>

          <Paper sx={{ mt: 10, p: 8 }}>
            <Table />
            <Paginations />
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
