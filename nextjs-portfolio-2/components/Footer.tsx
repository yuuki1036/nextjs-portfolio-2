import React, { VFC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Link from "./Link";
import { EmailOutlined, GitHub } from "@mui/icons-material";

const Footer: VFC = () => {
  return (
    <footer>
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
            sx={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <GitHub
                fontSize="large"
                sx={{ color: "error.main" }}
              />

              <Typography
                variant="h6"
                sx={{
                  ml: "1rem",
                  color: "error.main",
                  fontWeight: "bold",
                }}
              >
                yuuki1036
              </Typography>
            </Box>
          </Link>

          <Link
            href="mailto:yuuki1036@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "1rem",
              }}
            >
              <EmailOutlined
                fontSize="large"
                sx={{ color: "error.main" }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: "1rem",
                  color: "error.main",
                  fontWeight: "bold",
                }}
              >
                yuuki1036@gmail.com
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
