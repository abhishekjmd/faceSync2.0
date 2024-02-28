import React from "react";
import { Box, Typography } from "@mui/material";
import { SCREEN_HEIGHT,SCREEN_WIDTH } from "../utils/Theme";
function ClassSchedules() {
  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    ></Box>
  );
}

export default ClassSchedules;
