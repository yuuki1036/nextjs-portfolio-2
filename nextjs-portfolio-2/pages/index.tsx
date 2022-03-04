import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import {
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import Link from "../components/Link";
import tateyama from "../public/images/tateyama.webp";

const BackImageWrapper = styled(Box)`
  z-index: -1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        height: "10000px",
        backgroundColor: "info.main",
      }}
    >
      <Box sx={{}}>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Typography fontSize={60}>yuuki1036</Typography>
        <Box sx={{}}>
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
                      margin: "0.5rem",
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
                      margin: "0.5rem",
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
                      m: "0.5rem",
                      backgroundColor: "#fffde7",
                    }}
                  >
                    <Typography
                      fontSize={60}
                      sx={{ m: 0, p: 0 }}
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
        </Box>
      </Box>
      <BackImageWrapper>
        <Image
          src={tateyama}
          layout="intrinsic"
          height={4032}
          width={3024}
          alt="aaa"
          objectFit="cover"
          quality={100}
        />
      </BackImageWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          MUI v5 + Next.js withああ武器
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
