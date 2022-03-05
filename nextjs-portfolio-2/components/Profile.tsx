import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode, VFC } from "react";
import {
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import profile from "../public/images/profile.png";
import MyAvatar from "./MyAvatar";

const Profile: VFC = () => {
  return (
    <Parallax speed={-6}>
      <Box
        sx={{
          bgcolor: "info.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          p: "1.5rem",
        }}
      >
        <Parallax speed={-4}>
          <Box
            sx={{
              bgcolor: "warning.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100vw",
              p: "2rem",
            }}
          >
            <Parallax speed={-2}>
              <MyAvatar />
            </Parallax>
            <Parallax speed={-2}>
              <Typography
                sx={{ color: "#fff", py: "1rem" }}
              >
                WEB系フルスタックエンジニアです。主にECサイトの開発・保守を経験してきました。
                <br />
                最近はReactやTypeScriptを勉強しています。
                <br />
                クラウドの学習を兼ねてAWS認定ソリューションアーキテクトアソシエイトを取得しました。
                <br />
                現在はフリーランスエンジニアとして案件をこなしながら、転職活動を行っています。
              </Typography>
            </Parallax>
          </Box>
        </Parallax>
      </Box>
    </Parallax>
  );
};

export default Profile;
