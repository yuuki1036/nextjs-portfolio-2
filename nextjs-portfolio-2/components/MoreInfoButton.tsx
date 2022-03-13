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
        p: "1.5rem",
        borderRadius: "5rem",
        mt: "1rem",
      }}
    >
      <Parallax speed={-1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowCircleRight fontSize="large" sx={{}} />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ ml: ".5rem", mt: ".2rem" }}
          >
            More Info
          </Typography>
        </Box>
      </Parallax>
    </Box>
  );
};

export default MoreInfoButton;
