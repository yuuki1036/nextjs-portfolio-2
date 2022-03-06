import { Box } from "@mui/material";
import Image from "next/image";
import React, { VFC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import profile from "../public/images/profile.png";

const MyAvatar: VFC = () => {
  return (
    <Box>
      <ParallaxBanner
        style={{ borderRadius: "100rem" }}
        layers={[
          {
            children: (
              <Image
                src={profile}
                width={200}
                height={261}
                quality={100}
                alt="yuuki1036"
              />
            ),
            speed: -4,
            expanded: true,
          },
        ]}
      >
        <Box sx={{ width: "200px", height: "200px" }}></Box>
      </ParallaxBanner>
    </Box>
  );
};

export default MyAvatar;
