import { Container } from "@mui/material";
import React, { ReactNode, VFC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

type Props = {
  children: ReactNode;
};

const Prallax: VFC<Props> = ({ children }) => {
  return (
    <ParallaxBanner
      style={{
        height: "6vh",
        width: "80vw",
        marginRight: "auto",
        marginLeft: "auto",
        aspectRatio: "2 / 1",
      }}
      layers={[
        {
          children: (
            <div
              style={{
                height: "9vh",
                margin: "0",
                backgroundColor: "#D9CB9E",
              }}
            ></div>
          ),
          speed: -5,
          expanded: false,
        },
        {
          children: (
            <div
              style={{
                height: "7vh",
                margin: "1rem",
                backgroundColor: "#b9a04d",
              }}
            ></div>
          ),
          speed: -10,
          expanded: false,
        },
        {
          children: (
            <Box
              sx={{
                m: "2rem",
                backgroundColor: "#3B372A",
              }}
            >
              <Typography
                fontSize={55}
                sx={{
                  m: 0,
                  p: 0,
                  color: "info.main",
                }}
              >
                HELLO
              </Typography>
            </Box>
          ),
          speed: -15,
          expanded: false,
        },
      ]}
    />
  );
};

export default Prallax;
