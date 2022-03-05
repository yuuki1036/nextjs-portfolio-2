import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode, VFC } from "react";

const MainVisual: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "15vh",
        mb: "10vh",
      }}
    >
      <Box sx={{}}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          yuuki1036
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
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
            color: "success.main",
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
