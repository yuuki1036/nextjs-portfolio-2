import React, { VFC } from "react";
import { Box } from "@mui/material";
import WorksPreviewData from "./WorksPreviewData";
import WorksPreviewImage from "./WorksPreviewImage";
import Post from "types/post";

type Props = {
  post: Post;
};

const WorksPreview: VFC<Props> = ({ post }) => {
  const src = `/images/works/${post.slug}-preview.png`;

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
          <WorksPreviewImage src={src} alt={post.title} />
        </Box>
        <Box>
          <WorksPreviewData post={post} />
        </Box>
      </Box>
    </article>
  );
};

export default WorksPreview;
