import React, { VFC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Link from "./Link";
import { EmailOutlined, GitHub } from "@mui/icons-material";

const Footer: VFC = () => {
  return (
    <footer>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5rem",
          mb: "5rem",
        }}
      >
        <Box>
          <Link
            href="https://github.com/yuuki1036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <GitHub fontSize="large" />

              <Typography>yuuki1036</Typography>
            </Box>
          </Link>

          <Link
            href="mailto:yuuki1036@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailOutlined fontSize="medium" />
              <Typography>yuuki1036@gmail.com</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
