import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode, VFC } from "react";

const MainVisual: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "15vh",
        bgColor: "success.main",
      }}
    >
      <Box sx={{ bgColor: "success.main" }}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "4rem",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          yuuki1036
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: "4rem",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          Frontend
        </Typography>
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: "4rem",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          Backend
        </Typography>
        <Typography
          sx={{
            color: "primary.light",
            fontSize: "4rem",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default MainVisual;
