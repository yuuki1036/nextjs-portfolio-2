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
import MyHeader from "components/myheader";
import { Box, Typography } from "@mui/material";

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
        <Box sx={{ mb: "1rem" }}>
          <MyHeader pageTitle={"experience"} />
          <Box sx={{ backgroundColor: "Info.main" }}>
            <Box sx={{ p: "2rem", mt: "4rem" }}>
              <Typography variant="h5">Basic</Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "Info.main" }}>
            <Box sx={{ p: "2rem", mt: "4rem" }}>
              <Typography variant="h5">
                Framework
              </Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "Info.main" }}>
            <Box sx={{ p: "2rem", mt: "4rem" }}>
              <Typography variant="h5">Others</Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "Info.main" }}>
            <Box sx={{ p: "2rem", mt: "4rem" }}>
              <Typography variant="h5" component="h3">
                certification
              </Typography>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default Experience;
