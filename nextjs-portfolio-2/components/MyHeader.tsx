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
          mt: "1rem",
          mb: "1rem",
        }}
      >
        <Link href="/">
          <Box sx={{ width: "48px", height: "48px" }}>
            <Image
              src={profile}
              width={48}
              height={48}
              quality={100}
              alt="yuuki1036"
            />
          </Box>
        </Link>
        <Typography
          variant="h3"
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
