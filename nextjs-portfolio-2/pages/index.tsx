import React from "react";
import MainVisual from "components/MainVisual";
import Profile from "components/Profile";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <MainVisual />
      <Profile />
    </Wrapper>
  );
};

export default Home;
