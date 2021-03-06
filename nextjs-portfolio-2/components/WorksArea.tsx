import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import Post from "types/post";
import WorksPreview from "./WorksPreview";

type Props = {
  posts: Post[];
};

const WorksArea: VFC<Props> = ({ posts }) => {
  return (
    <section>
      <Box sx={{ maxWidth: "960px", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            textAlign: "center",
            mb: "1rem",
          }}
        >
          Works
        </Typography>
        <Box sx={{ p: { xs: "1rem", sm: "2rem" } }}>
          {posts.map((post, i) => (
            <WorksPreview key={i} post={post} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default WorksArea;
