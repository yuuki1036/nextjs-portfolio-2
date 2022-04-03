import React, { VFC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { CertificationData } from "lib/certification_data";

const CertificationImage: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "info.main",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: { xs: "2rem", sm: "3.5rem" },
        px: "1rem",
        mb: { xs: "4rem", sm: "8rem" },
      }}
    >
      {CertificationData.map((item, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              position: "relative",
              width: {
                xs: "75px",
                sm: "100px",
                md: "150px",
              },
              height: {
                xs: "75px",
                sm: "100px",
                md: "150px",
              },
            }}
          >
            <Image
              src={item.src}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CertificationImage;
