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
  // useEffect(() => {}, [isSet]);
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

  // const handleSelect = async (e) => {
  //   setAcadomicYear(e);
  //   setIsAcadomicYear(true);
  //   try {
  //     const result = await ResultService.getSubjectsByYear(
  //       e,
  //       users.resultToken
  //     );

  //     getSubjectByAcadamicYear(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const dateChange = (e) => {
  //   setIsDate(true);
  //   setStartDate(e.target.value);
  // };
  // const handleSubject = async (e) => {
  //   try {
  //     if (startDate && acadomicYear) {
  //       const students = await ResultService.getStudentByAcadomicYearAndSubject(
  //         startDate,
  //         e,
  //         users.resultToken
  //       );
  //       setStudents(students?.data?.data);

  //       getStudentByStudentIdndAcadomicYear(students.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const classes = useStyles();
  return (
    <>
      {/* <div>
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
      </div> */}
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
                  {/* <TableCell align='right'>{row.Subjectcode}</TableCell> */}
                  <TableCell>
                    <Input
                      value={row?.result}
                      name='result'
                      onChange={(e) => {
                        changeGrade(e, row);
                      }}
                      // disabled={row.isEdit}
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
