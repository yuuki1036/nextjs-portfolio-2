import { Box, Container, Typography } from "@mui/material";
import { CertificationData } from "lib/certification_data";
import Image from "next/image";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Post from "types/post";
import CertificationImage from "./CertificationImage";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";
import WorksPreview from "./WorksPreview";
import Works from "./WorksPreview";

const CertificationArea: VFC = () => {
  return (
    <section>
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
            textAlign: "center",
            mb: "1rem",
          }}
        >
          Certification
        </Typography>
        <Box sx={{ p: { xs: "1rem", sm: "2rem" } }}>
          <CertificationImage />
        </Box>
      </Box>
    </section>
  );
};

export default CertificationArea;
