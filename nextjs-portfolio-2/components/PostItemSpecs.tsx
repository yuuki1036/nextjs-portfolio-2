import React, { VFC } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Spec from "types/spec";
import { createRows } from "lib/util";

type Props = {
  title: string;
  specs: Spec;
};

const PostItemSpecs: VFC<Props> = ({ title, specs }) => {
  const rows = createRows(specs);

  return (
    <Box sx={{ my: "3rem" }}>
      <Box>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box sx={{ mt: "1rem" }}>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {rows.map((row, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Typography>{row.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.value}</Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PostItemSpecs;
