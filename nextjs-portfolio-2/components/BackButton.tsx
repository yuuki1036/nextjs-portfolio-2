import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import Link from "./Link";

const BackButton: VFC = () => {
  return (
    <Link href="/" underline="none">
      <Box
        sx={{
          bgcolor: "warning.main",
          textAlign: "center",
          width: "16rem",
          mx: "auto",
          px: "1.5rem",
          py: "1rem",
          borderRadius: "5rem",
          mt: "8rem",
          mb: "8rem",
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
            BACK
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default BackButton;
