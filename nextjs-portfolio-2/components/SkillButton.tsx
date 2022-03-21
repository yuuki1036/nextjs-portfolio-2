import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "./Link";

const SkillButton: VFC = () => {
  return (
    <Link href="/experience" underline="none">
      <Box
        sx={{
          bgcolor: "warning.main",
          textAlign: "center",
          width: "20rem",
          mx: "auto",
          px: "1.5rem",
          py: "1rem",
          borderRadius: "5rem",
          mb: "10rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "error.main",
          }}
        >
          <ArrowCircleRight fontSize="large" />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              ml: ".5rem",
              mt: ".2rem",
            }}
          >
            スキル・経験について
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default SkillButton;
