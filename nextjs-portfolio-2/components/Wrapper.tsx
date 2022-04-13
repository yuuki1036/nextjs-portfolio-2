import React, { ReactNode, VFC } from "react";
import { Box } from "@mui/material";
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
