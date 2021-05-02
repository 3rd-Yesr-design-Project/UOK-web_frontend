import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
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
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getSubjectByAcadamicYear } from '../../../Action/ResultActions';
import ResultService from '../../../services/ResultServices';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, Subject, Subjectcode, Grade) {
  return { id, Subject, Subjectcode, Grade, isEdit: false };
}

const LecturerResultTable = ({ getSubjectByAcadamicYear }) => {
  const [rows, setRows] = useState([
    createData(1, 'Fundementals of computing', 'SENG12222', 'A'),
    createData(2, 'DataStructured', 'SENG22222', 'A'),
  ]);
  const [startDate, setStartDate] = useState();
  const [acadomicYear, setAcadomicYear] = useState(1);
  const users = useSelector((state) => state.user);
  console.log('tookn', users);

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

  const handleSelect = async (e) => {
    setAcadomicYear(e);
    try {
      const result = await ResultService.getSubjectsByYear(
        e,
        users.resultToken
      );
      getSubjectByAcadamicYear(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const dateChange = (e) => {
    console.log(e.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <div>
        <label className='mt-2 p-1'>
          <input
            value={startDate}
            onChange={dateChange}
            placeholder='Add year'
          />
        </label>
        <label>
          <Dropdown>
            <label>Select Acadomic year</label>
            <DropdownButton onSelect={handleSelect}>
              <Dropdown.Item eventKey={1}>First Year</Dropdown.Item>
              <Dropdown.Item eventKey={2}>Second Year</Dropdown.Item>
              <Dropdown.Item eventKey={3}>Third Year</Dropdown.Item>
              <Dropdown.Item eventKey={4}>Fourth Year</Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </label>
      </div>
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

export default connect(null, { getSubjectByAcadamicYear })(LecturerResultTable);
