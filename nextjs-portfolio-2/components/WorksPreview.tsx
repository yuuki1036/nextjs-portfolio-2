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
          py: { xs: "2rem", sm: "4rem" },
          px: "1rem",
          mb: { xs: "4rem", sm: "8rem" },
          borderRadius: "1rem",
        }}
      >
        <Box>
          <Parallax speed={-1}>
            <WorksPreviewImage
              src={post.coverImage}
              title={post.title}
            />
          </Parallax>
        </Box>
        <Box>
          <Parallax speed={-1}>
            <WorksPreviewData post={post} />
          </Parallax>
        </Box>
      </Box>
    </article>
  );
};

export default WorksPreview;
