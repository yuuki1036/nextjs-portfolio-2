import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode, VFC } from "react";

const MainVisual: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "9rem",
        mb: "15rem",
      }}
    >
      <Box sx={{ pl: "1.2rem" }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            mb: "1rem",
          }}
        >
          yuuki1036
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            mb: "1rem",
          }}
        >
          Frontend
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            mb: "1rem",
          }}
        >
          Backend
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            mb: "1rem",
          }}
        >
          Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default MainVisual;
