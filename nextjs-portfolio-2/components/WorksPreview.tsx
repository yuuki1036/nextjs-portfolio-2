import { Box, Grid, Typography } from "@mui/material";
import React, { VFC } from "react";
import { Parallax } from "react-scroll-parallax";
import Post from "types/post";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";
import WorksPreviewData from "./WorksPreviewData";
import WorksPreviewImage from "./WorksPreviewImage";

type Props = {
  post: Post;
};

const WorksPreview: VFC<Props> = ({ post }) => {
  return (
    <article>
      <Box
        sx={{
          bgcolor: "info.main",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: { xs: "2rem", sm: "3rem" },
          px: "1rem",
          mb: { xs: "4rem", sm: "8rem" },
        }}
      >
        <Box>
          <WorksPreviewImage
            src={post.coverImage}
            title={post.title}
          />
        </Box>
        <Box>
          <WorksPreviewData post={post} />
        </Box>
      </Box>
    </article>
  );
};

export default WorksPreview;
