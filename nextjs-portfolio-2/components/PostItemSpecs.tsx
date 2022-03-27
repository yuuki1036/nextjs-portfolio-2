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

type Props = {
  title: string;
  specs: Spec;
};

const createData = (name: string, value: string) => {
  return { name, value };
};

const PostItemSpecs: VFC<Props> = ({ title, specs }) => {
  const rows = [
    ...Object.entries(specs).map(([name, value]) =>
      createData(name, value),
    ),
  ];

  return (
    <Box my={3}>
      <Box>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box mt={1}>
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
