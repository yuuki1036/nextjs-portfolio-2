import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import Post from "types/post";
import DateFormatter from "./DateFormatter";
import MoreInfoButton from "./MoreInfoButton";

type Props = {
  post: Post;
};

const WorksPreviewData: VFC<Props> = ({ post }) => {
  return (
    <Box
      sx={{
        minWidth: "300px",
        ml: { sm: "2rem" },
        mt: { xs: "1rem", md: 0 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        {post.title}
      </Typography>
      <Typography
        sx={{
          mt: { xs: 0, sm: ".5rem" },
          mb: { xs: ".6rem", sm: "1rem" },
        }}
      >
        {post.excerpt}
      </Typography>
      {post.tag.map((value, i) => (
        <Typography
          key={i}
          sx={{
            display: "inline",
            bgcolor: "error.main",
            mr: ".8rem",
            px: ".7rem",
            py: ".2rem",
            color: "#fff",
            borderRadius: "2rem",
          }}
        >
          {value}
        </Typography>
      ))}
      <Typography sx={{ mt: { xs: ".5rem", sm: "1rem" } }}>
        <DateFormatter dateString={post.date} />
      </Typography>
      <MoreInfoButton slug={post.slug} />
    </Box>
  );
};

export default WorksPreviewData;
