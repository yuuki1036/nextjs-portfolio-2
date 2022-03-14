import { Box, Container } from "@mui/material";
import React, { ReactNode, VFC } from "react";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Wrapper: VFC<Props> = ({ children }) => {
  return (
    <Box sx={{}}>
      {children}
      <Footer />
    </Box>
  );
};

export default Wrapper;
