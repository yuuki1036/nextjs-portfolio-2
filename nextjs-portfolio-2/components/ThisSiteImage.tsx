import React, { useState, VFC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import tateyama from "../public/images/tateyama.png";

const ThisSiteImage: VFC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  return (
    <Box sx={{ textAlign: "center" }}>
      <ParallaxBanner
        layers={[
          {
            children: (
              <Image
                src={tateyama}
                width={448}
                height={598}
                alt="mt.tateyama"
                priority={true}
                className={
                  isLoad ? "onload-complete" : "onload"
                }
                onLoadingComplete={() => setIsLoad(true)}
              />
            ),
            speed: -3,
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
              xs: "400px",
              md: "560px",
            },
          }}
        ></Box>
      </ParallaxBanner>
      <Typography>22.10 @Mt.Tateyama</Typography>
    </Box>
  );
};

export default ThisSiteImage;
