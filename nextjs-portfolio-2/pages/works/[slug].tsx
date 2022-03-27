import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import Post from "../../types/post";
import PostBody from "components/PostBody";
import Wrapper from "components/Wrapper";
import MyHeader from "components/MyHeader";
import { Box } from "@mui/material";
import PostHeader from "components/PostHeader";

type Props = {
  post: Post;
};

const Works: NextPage<Props> = ({ post }) => {
  // 404リダイレクト
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
        <meta
          name="description"
          content={`WEB系フルスタックエンジニアyuuki1036の制作物「${post.title}」の詳細ページです。${post.overView}`}
        />
      </Head>
      <Wrapper>
        <MyHeader pageTitle="Works" />
        <Box sx={{ maxWidth: "960px", mx: "auto" }}>
          <PostHeader post={post} />
          <Box sx={{ mt: "3rem", mb: "6rem" }}>
            <PostBody post={post} />
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default Works;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
