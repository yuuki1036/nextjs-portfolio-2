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
import CertificationArea from "components/CertificationArea";
import GithubCorner from "react-github-corner";
import ThisSiteButton from "components/ThisSiteButton";

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
    <>
      <Wrapper>
        <MainVisual />
        <ProfileArea />
        <SkillButton />
        <WorksArea posts={allPosts} />
        <CertificationArea />
        <ThisSiteButton />
      </Wrapper>
      <GithubCorner
        href="https://github.com/yuuki1036"
        bannerColor="#3B372A"
        target="_blank"
        rel="noopener noreferrer"
      />
    </>
  );
};

export default Home;
