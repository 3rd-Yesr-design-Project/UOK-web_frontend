import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import { Delete, BorderColor } from '@material-ui/icons';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, Subject, Subjectcode, Grade) {
  return { id, Subject, Subjectcode, Grade, isEdit: false };
}

const LecturerResultTable = () => {
  const [rows, setRows] = useState([
    createData(1, 'Fundementals of computing', 'SENG12222', 'A'),
    createData(2, 'DataStructured', 'SENG22222', 'A'),
  ]);
  const [startDate, setStartDate] = useState();

  const togellClick = (id) => {
    console.log();
    setRows([
      ...rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEdit: !row.isEdit };
        }
        return row;
      }),
    ]);
  };

  const changeGrade = (e, row) => {
    console.log(row);
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const dateChange = (input) => {
    console.log(input);
  };

  const classes = useStyles();
  return (
    <>
      <input value={startDate} onChange={dateChange} />

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
                <TableCell align='right'>
                  <input
                    value={row.Grade}
                    name='Grade'
                    onChange={(e) => {
                      changeGrade(e, row);
                    }}
                    disabled={row.isEdit}
                  />
                </TableCell>
                <TableCell align='right'>
                  <IconButton aria-label='delete'>
                    <BorderColor onClick={() => togellClick(row.id)} />
                  </IconButton>
                  <IconButton aria-label='delete'>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LecturerResultTable;
