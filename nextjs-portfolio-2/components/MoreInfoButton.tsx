import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";

const MoreInfoButton: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "warning.main",
        textAlign: "center",
        px: "1rem",
        py: "1rem",
        borderRadius: "5rem",
        mt: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowCircleRight fontSize="large" />
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ ml: ".5rem", mt: ".2rem" }}
        >
          More Info
        </Typography>
      </Box>
    </Box>
  );
};

export default MoreInfoButton;
