import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import MainVisual from "components/MainVisual";
import MyAvatar from "components/MyAvatar";
import Profile from "components/Profile";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import {
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import Link from "../components/Link";
import tateyama from "../public/images/tateyama.webp";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <MainVisual />
      <Profile />
    </Wrapper>
  );
};

export default Home;
