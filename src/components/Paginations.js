import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 8 }}>
      <Pagination
        count={10}
        shape="rounded"
        variant="outlined"
        color="info"
        // MenuProps={{
        //   sx: {
        //     "&& .MuiPaginationItem-previousNext": {
        //       backgroundColor: "action.hover",
        //       "&:hover": {
        //         backgroundColor: "action.hover",
        //       },
        //     },
        //     "&& .Mui-focusVisible": {
        //       backgroundColor: "action.hover",
        //     },
        //   },
        // }}
      />
    </Stack>
  );
}
