import React, { useState, VFC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  src: string;
  alt: string;
};

const WorksPreviewImage: VFC<Props> = ({ src, alt }) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  return (
    <>
      <ParallaxBanner
        layers={[
          {
            children: (
              <Image
                src={src}
                width={440}
                height={440}
                alt={alt}
                className={
                  isLoad ? "onload-complete" : "onload"
                }
                onLoadingComplete={() => setIsLoad(true)}
              />
            ),
            speed: -1,
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
    </>
  );
};

export default WorksPreviewImage;
