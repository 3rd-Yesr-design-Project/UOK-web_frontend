import React, { useState, useEffect } from 'react';
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
  Input,
} from '@material-ui/core';
import { Delete, BorderColor } from '@material-ui/icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getStudentByStudentIdndAcadomicYear } from '../../../Action/studentAction';
import { getSubjectByAcadamicYear } from '../../../Action/subjectAction';
import ResultService from '../../../services/ResultServices';
import Empty from '../../../componet/common/Empty';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, Subject, Subjectcode, Grade) {
  return { id, Subject, Subjectcode, Grade, isEdit: false };
}

const LecturerResultTable = ({ students }) => {
  const [student, setStudents] = useState([]);
  useEffect(() => {
    setStudents(students ? students : []);
  }, [students]);

  const togellClick = () => {};

  const changeGrade = (e, row) => {
    const value = e?.target?.value;
    const name = e?.target?.name;

    const { id } = row;

    const tempStudents = student?.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });

    setStudents(tempStudents);
    console.log(tempStudents);
  };

  const SaveData = async () => {
    if (student?.every((result) => result?.result !== null)) {
      await ResultService.updateStudentResults(student);
    }
  };

  const classes = useStyles();
  return (
    <>
      {student?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>StudenName</TableCell>
                <TableCell>StudentId</TableCell>

                <TableCell>Result</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student?.map((row, i) => (
                <TableRow key={row.Subject}>
                  <TableCell component='th' scope='row'>
                    {row?.student?.name}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row?.student?.student_no}
                  </TableCell>
                  <TableCell>
                    <Input
                      value={row?.result}
                      name='result'
                      onChange={(e) => {
                        changeGrade(e, row);
                      }}
                    />
                  </TableCell>
                  <TableCell>
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
            <IconButton aria-label='delete' onClick={() => SaveData()}>
              Save
            </IconButton>
          </Table>
        </TableContainer>
      ) : (
        <Empty />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.student.subjectStudents,
  };
};

export default connect(mapStateToProps, {
  getSubjectByAcadamicYear,
  getStudentByStudentIdndAcadomicYear,
})(LecturerResultTable);
