import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return <TableContainer component={Paper} >
      <Table stickyHeader>
          <TableHead>
              <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell align='centre'>Class</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
          <TableCell>1.</TableCell>
                  <TableCell>Ashish</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell align='centre'>12th</TableCell>
                  </TableRow>
          </TableBody>
      </Table>

  </TableContainer>;
};
