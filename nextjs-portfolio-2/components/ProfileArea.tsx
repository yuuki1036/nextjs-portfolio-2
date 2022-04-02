import { Box } from "@mui/material";
import React, { VFC } from "react";
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
        py: "1.8rem",
        px: "1rem",
        mb: "10rem",
      }}
    >
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
    </Box>
  );
};

export default ProfileArea;
