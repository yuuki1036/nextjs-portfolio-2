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
            speed: -2,
            expanded: true,
          },
        ]}
      >
        <Box
          sx={{
            width: {
              xs: "300px",
              md: "440px",
            },
            height: {
              xs: "240px",
              md: "352px",
            },
          }}
        ></Box>
      </ParallaxBanner>
    </Box>
  );
};

export default WorksPreviewImage;
