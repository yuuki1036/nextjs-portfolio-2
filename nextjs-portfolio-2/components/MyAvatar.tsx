import React, { VFC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
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
                alt="yuuki1036"
                priority={true}
              />
            ),
            speed: -2,
            expanded: true,
          },
        ]}
      >
        <Box
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
          }}
        ></Box>
      </ParallaxBanner>
    </Box>
  );
};

export default MyAvatar;
