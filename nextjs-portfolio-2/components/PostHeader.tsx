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
            <a
              href={post.launch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <Launch />
              </Fab>
            </a>
          </Box>
        )}
        {post.source && (
          <Box sx={{ ml: "1.4rem" }}>
            <a
              href={post.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <GitHub />
              </Fab>
            </a>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PostHeader;
