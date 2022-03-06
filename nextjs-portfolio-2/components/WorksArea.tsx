import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Post from "types/post";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";
import WorksPreview from "./WorksPreview";
import Works from "./WorksPreview";

type Props = {
  posts: Post[];
};

const WorksArea: VFC<Props> = ({ posts }) => {
  return (
    <section>
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
        Works
      </Typography>
      <Box sx={{ p: "2rem" }}>
        {posts.map((post, i) => (
          <WorksPreview key={i} post={post} />
        ))}
      </Box>
    </section>
  );
};

export default WorksArea;
