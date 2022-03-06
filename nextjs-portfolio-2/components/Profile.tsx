import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";

const Profile: VFC = () => {
  return (
    <Box
      sx={{
        p: "1.5rem",
        py: "2rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "success.main", py: "1rem" }}
      >
        WEB系フルスタックエンジニアです。主にECサイトの開発・保守を経験してきました。
        <br />
        最近はReactやTypeScriptを勉強しています。
        <br />
        クラウドの学習を兼ねてAWS認定ソリューションアーキテクトアソシエイトを取得しました。
        <br />
        現在はフリーランスエンジニアとして案件をこなしながら、転職活動を行っています。
      </Typography>
    </Box>
  );
};

export default Profile;
