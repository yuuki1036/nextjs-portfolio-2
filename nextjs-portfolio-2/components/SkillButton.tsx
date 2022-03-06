import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";

const SkillButton: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "info.main",
        textAlign: "center",
        width: "20rem",
        mx: "auto",
        p: "1.5rem",
        borderRadius: "5rem",
        mb: "10rem",
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
            スキル・経験について
          </Typography>
        </Box>
      </Parallax>
    </Box>
  );
};

export default SkillButton;
