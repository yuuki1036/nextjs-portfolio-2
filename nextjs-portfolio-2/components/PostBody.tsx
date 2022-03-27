import React, { VFC } from "react";
import Post from "types/post";
import PostAddImage from "./PostAddImage";
import PostItemNormal from "./PostItemNormal";
import PostItemSpecs from "./PostItemSpecs";

type Props = {
  post: Post;
};

const PostBody: VFC<Props> = ({ post }) => {
  const src = `/images/works/${post.slug}-add.png`;
  const alt = `sub image of ${post.title}`;
  return (
    <>
      <PostItemNormal
        title="概要"
        sentences={post.overView}
      />
      {post.chronology && (
        <PostItemNormal
          title="開発経緯"
          sentences={post.chronology}
        />
      )}
      <PostItemSpecs title="仕様" specs={post.spec} />
      <PostAddImage src={src} alt={alt} />
      <PostItemNormal
        title="主な機能"
        sentences={post.main}
      />
      {post.others && (
        <PostItemNormal
          title="その他機能"
          sentences={post.others}
        />
      )}
      {post.learned && (
        <PostItemNormal
          title="学んだこと"
          sentences={post.learned}
        />
      )}
    </>
  );
};

export default PostBody;
