import React, { VFC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import Post from "types/post";

type Props = {
  post: Post;
};

const PostHeaderImage: VFC<Props> = ({ post }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "300px",
            md: "440px",
          },
          height: {
            xs: "240px",
            md: "352px",
          },
          mt: "2rem",
        }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default PostHeaderImage;
