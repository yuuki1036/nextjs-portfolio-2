import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";

type Props = {
  title: string;
  sentences: string[];
};

const PostItemNormal: VFC<Props> = ({
  title,
  sentences,
}) => {
  return (
    <Box my={3}>
      <Box mb={1}>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box>
        {sentences.map((str, i) => {
          return <Typography key={i}>{str}</Typography>;
        })}
      </Box>
    </Box>
  );
};

export default PostItemNormal;
