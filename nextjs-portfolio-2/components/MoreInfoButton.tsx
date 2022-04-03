import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "./Link";

type Props = {
  slug: string;
};

const MoreInfoButton: VFC<Props> = ({ slug }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "1rem",
      }}
    >
      <Link
        as={`/works/${slug}`}
        href="/works/[slug]"
        underline="none"
      >
        <Box
          sx={{
            bgcolor: "warning.main",
            width: "13rem",
            px: ".6rem",
            py: ".7rem",
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
                mr: ".4rem",
              }}
            >
              More Info
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default MoreInfoButton;
