import React from "react";
import MainVisual from "components/MainVisual";
import Profile from "components/Profile";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";
import SkillButton from "components/SkillButton";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <MainVisual />
      <Profile />
      <SkillButton />
    </Wrapper>
  );
};

export default Home;
