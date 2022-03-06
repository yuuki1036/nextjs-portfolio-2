import React from "react";
import MainVisual from "components/MainVisual";
import Profile from "components/Profile";
import Wrapper from "components/Wrapper";
import type { NextPage } from "next";
import SkillButton from "components/SkillButton";
import ProfileArea from "components/ProfileArea";
import WorksArea from "components/WorksArea";
import { getAllPosts } from "lib/api";
import Post from "types/post";

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

type Props = {
  allPosts: Post[];
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Wrapper>
      <MainVisual />
      <ProfileArea />
      <SkillButton />
      {allPosts.length > 0 && (
        <WorksArea posts={allPosts} />
      )}
    </Wrapper>
  );
};

export default Home;
