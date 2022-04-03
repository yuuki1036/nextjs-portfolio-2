import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "./Link";

const ThisSiteButton: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: "10rem",
      }}
    >
      <Link href="/thispage" underline="none">
        <Box
          sx={{
            bgcolor: "warning.main",
            width: "20rem",
            px: "1.5rem",
            py: ".8rem",
            borderRadius: "5rem",
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
              このサイトについて
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ThisSiteButton;
