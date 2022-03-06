import { Box } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";

const ProfileArea: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "info.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        py: "2rem",
        px: "1rem",
        mb: "10rem",
      }}
    >
      <Parallax speed={-2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <MyAvatar />
          <Profile />
        </Box>
      </Parallax>
    </Box>
  );
};

export default ProfileArea;
