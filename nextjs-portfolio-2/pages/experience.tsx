import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { SITE_NAME } from "lib/constants";
import {
  baseSkills,
  certification,
  FrameworkSkills,
  others,
} from "lib/skill_data";
import Wrapper from "components/Wrapper";
import MyHeader from "components/MyHeader";
import { Box, Typography } from "@mui/material";
import SkillSet from "components/SkillSet";
import OtherSkillSet from "components/OtherSkillSet";
import BackButton from "components/BackButton";

const Experience: NextPage = () => {
  return (
    <>
      <Head>
        <title>experience | {SITE_NAME}</title>
        <meta
          name="description"
          content="web系フルスタックエンジニアyuuki1036の実務経験・スキル一覧です。"
        />
      </Head>
      <Wrapper>
        <MyHeader pageTitle="experience" />
        <Box sx={{ maxWidth: "768px", mx: "auto" }}>
          <SkillSet title="Basic" skills={baseSkills} />
          <SkillSet
            title="Framework"
            skills={FrameworkSkills}
          />
          <OtherSkillSet title="Others" skills={others} />
          <OtherSkillSet
            title="Certification"
            skills={certification}
          />
        </Box>
        <BackButton />
      </Wrapper>
    </>
  );
};

export default Experience;
