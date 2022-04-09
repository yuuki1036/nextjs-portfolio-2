import React, { VFC } from "react";
import Image from "next/image";
import { Box, Fab, Grid, Typography } from "@mui/material";
import DateFormatter from "./DateFormatter";
import {
  GitHub,
  Launch,
  PostAddTwoTone,
} from "@mui/icons-material";
import Post from "types/post";
import PostHeaderImage from "./PostHeaderImage";
import MyFab from "./MyFab";

type Props = {
  post: Post;
};

const PostHeader: VFC<Props> = ({ post }) => {
  const src = `/images/works/${post.slug}-main.png`;
  const alt = `main image of ${post.title}`;

  return (
    <>
      <PostHeaderImage src={src} alt={alt} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "3rem",
          mb: "1rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          {post.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          <DateFormatter dateString={post.date} />
        </Typography>
        {post.launch && (
          <Box sx={{ ml: "1.4rem" }}>
            <MyFab href={post.launch}>
              <Launch />
            </MyFab>
          </Box>
        )}
        {post.source && (
          <Box sx={{ ml: "1.4rem" }}>
            <MyFab href={post.source}>
              <GitHub />
            </MyFab>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PostHeader;
