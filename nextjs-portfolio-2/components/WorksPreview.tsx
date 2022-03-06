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
      <Grid
        container
        sx={{
          bgcolor: "info.main",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          py: "4rem",
          px: "1rem",
          // mx: "2rem",
          mb: "10rem",
          borderRadius: "2rem",
        }}
      >
        <Grid item sm={12}>
          <Parallax speed={-2}>
            <WorksPreviewImage
              src={post.coverImage}
              title={post.title}
            />
          </Parallax>
        </Grid>
        <Grid item>
          <Parallax speed={-2}>
            <WorksPreviewData post={post} />
          </Parallax>
        </Grid>
      </Grid>
    </article>
  );
};

export default WorksPreview;
