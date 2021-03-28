import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton} from '@material-ui/core';
import {Delete,BorderColor} from '@material-ui/icons';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Subject, Subjectcode, Grade) {
  return { Subject, Subjectcode, Grade };
}

const rows = [
  createData('Fundementals of computing', 'SENG12222', 'A'),
  createData('DataStructured', 'SENG22222', 'A'),
];

const LecturerResultTable = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align='right'>Subjectcode</TableCell>
            <TableCell align='right'>Grade</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Subject}>
              <TableCell component='th' scope='row'>
                {row.Subject}
              </TableCell>
              <TableCell align='right'>{row.Subjectcode}</TableCell>
              <TableCell align='right'>{row.Grade}</TableCell>
              <TableCell align='right'>
              <IconButton aria-label="delete">
                    <BorderColor />
                </IconButton>
              <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
      </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LecturerResultTable;
