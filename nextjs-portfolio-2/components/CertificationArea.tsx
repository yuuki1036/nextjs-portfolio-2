import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import CertificationImage from "./CertificationImage";

const CertificationArea: VFC = () => {
  return (
    <section>
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            WebkitTextStroke: "1px #3B372A",
            textAlign: "center",
            mb: "1rem",
          }}
        >
          Certification
        </Typography>
        <Box sx={{ p: { xs: "1rem", sm: "2rem" } }}>
          <CertificationImage />
        </Box>
      </Box>
    </section>
  );
};

export default CertificationArea;
