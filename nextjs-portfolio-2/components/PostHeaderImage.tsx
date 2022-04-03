import React, { useState, VFC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

type Props = {
  src: string;
  alt: string;
};

const PostHeaderImage: VFC<Props> = ({ src, alt }) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "320px",
            md: "448px",
          },
          height: {
            xs: "180px",
            md: "252px",
          },
          mt: "2rem",
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority={true}
          className={isLoad ? "onload-complete" : "onload"}
          onLoadingComplete={() => setIsLoad(true)}
        />
      </Box>
    </Box>
  );
};

export default PostHeaderImage;
