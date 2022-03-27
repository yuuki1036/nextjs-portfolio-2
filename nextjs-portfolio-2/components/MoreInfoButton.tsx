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
    <Link as={`/works/${slug}`} href="/works/[slug]">
      <Box
        sx={{
          bgcolor: "warning.main",
          textAlign: "center",
          width: "13rem",
          pt: ".6rem",
          pb: ".7rem",
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
            sx={{ ml: ".5rem", mt: ".2rem", mr: ".4rem" }}
          >
            More Info
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default MoreInfoButton;
