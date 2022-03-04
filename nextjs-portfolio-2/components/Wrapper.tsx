import { Container } from "@mui/material";
import React, { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: VFC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ bgColor: "success.main" }}
    >
      <main>{children}</main>
    </Container>
  );
};

export default Wrapper;
