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
  const [isDate, setIsDate] = useState(false);
  const [isAcadomicYear, setIsAcadomicYear] = useState(false);

  const [subject, setSubject] = useState();
  const users = useSelector((state) => state.user);
  const subjects = useSelector((state) => state.result);
  console.log(subjects);
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
    setIsAcadomicYear(true);
    try {
      const result = await ResultService.getSubjectsByYear(
        e,
        users.resultToken
      );

      getSubjectByAcadamicYear(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dateChange = (e) => {
    setIsDate(true);
    setStartDate(e.target.value);
  };
  const handleSubject = async (e) => {
    try {
      if (startDate && acadomicYear) {
        const students = await ResultService.getStudentByAcadomicYearAndSubject(
          startDate,
          e,
          users.resultToken
        );
      }
    } catch (error) {
      console.log(error);
    }
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
        {isDate ? (
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
        ) : null}

        {isAcadomicYear && isDate ? (
          <label>
            <Dropdown>
              <label>Select Subjects</label>
              <DropdownButton onSelect={handleSubject}>
                {subjects?.subjects?.map((sub) => (
                  <Dropdown.Item eventKey={sub.id} key={sub.id}>
                    {sub.subject_code}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Dropdown>
          </label>
        ) : null}
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
