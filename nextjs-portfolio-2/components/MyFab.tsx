import { Fab } from "@mui/material";
import React, { ReactNode, VFC } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const MyFab: VFC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Fab
        size="medium"
        sx={{
          backgroundColor: "warning.main",
          "&:hover": { backgroundColor: "info.main" },
        }}
      >
        {children}
      </Fab>
    </a>
  );
};

export default MyFab;
