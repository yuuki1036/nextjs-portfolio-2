import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { VFC } from "react";
import {
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import Post from "types/post";
import MyAvatar from "./MyAvatar";
import Profile from "./Profile";

type Props = {
  src: string;
  title: string;
};

const WorksPreviewImage: VFC<Props> = ({ src, title }) => {
  return (
    <Box>
      <ParallaxBanner
        style={{
          borderRadius: "2rem",
          width: "220px",
          height: "150px",
          maxWidth: "440px",
          maxHeight: "300px",
        }}
        layers={[
          {
            children: (
              <Image
                src={src}
                width={440}
                height={440}
                alt={title}
              />
            ),
            speed: -4,
            expanded: true,
          },
        ]}
      >
        {/* <Box sx={{ width: "440px", height: "300px" }}></Box> */}
      </ParallaxBanner>
    </Box>
  );
};

export default WorksPreviewImage;
