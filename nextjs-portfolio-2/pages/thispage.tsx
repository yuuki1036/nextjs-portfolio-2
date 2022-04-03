import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { SITE_NAME } from "../lib/constants";
import { Box, Typography } from "@mui/material";
import Wrapper from "components/Wrapper";
import BackButton from "components/BackButton";
import ThisSiteSpec from "components/ThisSiteSpec";
import ThisSiteImage from "components/ThisSiteImage";

const ThisPage: NextPage = () => {
  // 404リダイレクト
  const router = useRouter();
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>このサイトについて | {SITE_NAME}</title>
        <meta
          name="description"
          content={`WEB系フルスタックエンジニアyuuki1036ポートフォリオサイトについての説明です。`}
        />
      </Head>
      <Wrapper>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
            mt: "3rem",
            mb: "5rem",
          }}
        >
          このサイトについて
        </Typography>
        <Box
          sx={{ maxWidth: "960px", px: "1rem", mx: "auto" }}
        >
          <Typography>
            Next.js, TypeScript
            を用いて作成しました。SSGにより高速に動作します。
            <br />
            サイト内の画像は全て next/image
            コンポーネントを使用しているので環境に応じた画像が配信されます。
            <br />
            スタイリングは Material-UI を使用し css in js
            で書きました。
            <br />
            一部の画像表現にパララックス効果を用いています。
          </Typography>

          <Typography sx={{ mt: "2.5rem" }}>
            作成日&ensp;21/08
            <br />
            更新日&ensp;22/03
          </Typography>

          <Typography>GitHubリポジトリ</Typography>
          <a
            href="https://github.com/yuuki1036/nextjs-portfolio-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography>
              https://github.com/yuuki1036/nextjs-portfolio-2
            </Typography>
          </a>
          <ThisSiteSpec />
          <ThisSiteImage />
        </Box>
        <BackButton />
      </Wrapper>
    </>
  );
};

export default ThisPage;
