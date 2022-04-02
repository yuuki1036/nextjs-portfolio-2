import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import Link from "./Link";

const BackButton: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "8rem",
        mb: "8rem",
      }}
    >
      <Link href="/" underline="none" passHref>
        <a>
          <Box
            sx={{
              bgcolor: "warning.main",
              width: "16rem",
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
                BACK
              </Typography>
            </Box>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default BackButton;
