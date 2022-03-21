import { Box, Container, Typography } from "@mui/material";
import { CertificationData } from "lib/certification_data";
import Image from "next/image";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Post from "types/post";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";
import WorksPreview from "./WorksPreview";
import Works from "./WorksPreview";

const CertificationImage: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "info.main",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: { xs: "2rem", sm: "3.5rem" },
        px: "1rem",
        mb: { xs: "4rem", sm: "8rem" },
      }}
    >
      <Box>
        {CertificationData.map((item, idx) => {
          return (
            <Image
              key={idx}
              src={item.src}
              alt={item.name}
              width={150}
              height={150}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CertificationImage;
