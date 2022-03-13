import { Box, Container } from "@mui/material";
import React, { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: VFC<Props> = ({ children }) => {
  return <Box sx={{}}>{children}</Box>;
};

export default Wrapper;
