import React, { VFC } from "react";
import Image from "next/image";
import { Box, Fab, Grid, Typography } from "@mui/material";
import DateFormatter from "./DateFormatter";
import { GitHub, Launch } from "@mui/icons-material";
import Post from "types/post";
import PostHeaderImage from "./PostHeaderImage";

type Props = {
  post: Post;
};

const PostHeader: VFC<Props> = ({ post }) => {
  return (
    <>
      <PostHeaderImage post={post} />
      <Box sx={{ mt: "3rem", mb: "1rem" }}>
        <Typography variant="h4">{post.title}</Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6">
            <DateFormatter dateString={post.date} />
          </Typography>
        </Grid>
        {post.launch && (
          <Grid item>
            <a
              href={post.launch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <Launch />
              </Fab>
            </a>
          </Grid>
        )}
        {post.source && (
          <Grid item>
            <a
              href={post.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <GitHub />
              </Fab>
            </a>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default PostHeader;
