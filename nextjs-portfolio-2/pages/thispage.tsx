import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { SITE_NAME } from "../lib/constants";
import Wrapper from "components/Wrapper";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import BackButton from "components/BackButton";
import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import tateyama from "../public/images/tateyama.png";
import { mt } from "date-fns/locale";

const specs = {
  動作環境: "ブラウザ（pc/tablet/mobile）",
  言語: "TypeScript",
  フレームワーク: "React, Next.js",
  スタイリング: "Material-UI",
  コンテナ: "Docker",
  Pass: "Vercel",
  バージョン管理: "Git, GitHub",
};

const createData = (name: string, value: string) => {
  return { name, value };
};

const ThisPage: NextPage = () => {
  // 404リダイレクト
  const router = useRouter();
  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  const rows = [
    ...Object.entries(specs).map(([name, value]) =>
      createData(name, value),
    ),
  ];

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

          <Typography>
            <span>GitHubリポジトリ&ensp;</span>
            <a
              href="https://github.com/yuuki1036/nextjs-portfolio-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/yuuki1036/nextjs-portfolio-2
            </a>
          </Typography>

          <TableContainer sx={{ mt: "3rem", mb: "8rem" }}>
            <Table size="small">
              <TableBody>
                {rows.map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ textAlign: "center" }}>
            <ParallaxBanner
              layers={[
                {
                  children: (
                    <Image
                      src={tateyama}
                      width={448}
                      height={598}
                      alt="mt.tateyama"
                      priority={true}
                    />
                  ),
                  speed: -3,
                  expanded: true,
                },
              ]}
            >
              <Box
                sx={{
                  width: {
                    xs: "300px",
                    md: "440px",
                  },
                  height: {
                    xs: "400px",
                    md: "560px",
                  },
                }}
              ></Box>
            </ParallaxBanner>
            <Typography>22.10 @Mt.Tateyama</Typography>
          </Box>
        </Box>
        <BackButton />
      </Wrapper>
    </>
  );
};

export default ThisPage;
