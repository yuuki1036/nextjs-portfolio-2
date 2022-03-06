import { Box, Chip, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Post from "types/post";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";
import WorksPreviewImage from "./WorksPreviewImage";

type Props = {
  post: Post;
};

const WorksPreviewData: VFC<Props> = ({ post }) => {
  return (
    <Box sx={{ ml: "2rem" }}>
      <Typography
        variant="h4"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
          WebkitTextStroke: "1px #000",
        }}
      >
        {post.title}
      </Typography>
      <Typography sx={{ mb: ".8rem" }}>
        {post.excerpt}
      </Typography>
      {post.tag.map((value, i) => (
        <Typography
          key={i}
          sx={{
            display: "inline",
            bgcolor: "primary.main",
            mr: ".8rem",
            px: ".7rem",
            py: ".2rem",
            color: "#fff",
            borderRadius: "2rem",
          }}
        >
          {value}
        </Typography>
      ))}
    </Box>
  );
};

export default WorksPreviewData;
