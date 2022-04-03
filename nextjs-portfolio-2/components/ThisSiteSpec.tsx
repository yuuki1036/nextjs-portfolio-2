import React, { VFC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { createRows } from "lib/util";
import { thisSiteData } from "lib/thissite_data";

const ThisSiteSpec: VFC = () => {
  const rows = createRows(thisSiteData.spec);

  return (
    <TableContainer sx={{ mt: "3rem", mb: "8rem" }}>
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
  );
};

export default ThisSiteSpec;
