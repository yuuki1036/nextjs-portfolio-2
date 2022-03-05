import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode, VFC } from "react";
import profile from "../public/images/profile.png";

const MyAvatar: VFC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: "1rem",
        mr: "2vw",
      }}
    >
      <Image
        src={profile}
        width={200}
        height={200}
        quality={100}
        alt="yuuki1036"
      />
    </Box>
  );
};

export default MyAvatar;
