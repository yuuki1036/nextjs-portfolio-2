import React, { VFC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Link from "./Link";
import Image from "next/image";
import profile from "../public/images/profile.webp";

type Props = {
  pageTitle: string;
};

const MyHeader: VFC<Props> = ({ pageTitle }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "1.5rem",
          mb: "1rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            ml: "1rem",
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #000",
          }}
        >
          {pageTitle}
        </Typography>
      </Box>
    </>
  );
};

export default MyHeader;
