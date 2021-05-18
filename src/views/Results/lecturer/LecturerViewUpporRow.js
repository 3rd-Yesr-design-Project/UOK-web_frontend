import React, { useState } from 'react';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';
import resultService from '../../../services/ResultServices';
import { getStudentByStudentIdndAcadomicYear } from '../../../Action/studentAction';
import { getSubjectByAcadamicYear } from '../../../Action/subjectAction';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LecturerViewUpporRow = ({
  getStudentByStudentIdndAcadomicYear,
  getSubjectByAcadamicYear,
}) => {
  const classes = useStyles();

  const [academicYear, setAcademicYear] = useState(null);
  const [year, setYear] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [subjects, setSubjects] = useState([]);

  const handleChangeYear = async (e) => {
    setYear(e.target.value);
    try {
      const subjects = await resultService.getSubjectsByYear(e.target.value);
      setSubjects(subjects.data.data);

      getSubjectByAcadamicYear(subjects.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSubject = async (e) => {
    setSubjectId(e.target.value);
    try {
      const students = await resultService.getStudentByAcadomicYearAndSubjectId(
        academicYear,
        e.target.value
      );

      getStudentByStudentIdndAcadomicYear(students?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=''>
      <div className='row'>
        <div className='col-md-2'>
          <TextField
            id='outlined-textarea'
            label='Academic Year'
            placeholder='Academic Year'
            multiline
            variant='outlined'
            onChange={(e) => setAcademicYear(e.target.value)}
          />
        </div>
        <div className='col-md-2'>
          {/* <TextField
            id='outlined-select-currency-native'
            select
            label='Year'
            value={year}
            onChange={handleChangeYear}
            SelectProps={{
              native: true,
            }}
            helperText='Please select your currency'
            variant='outlined'
          >
            {[1, 2, 3, 4].map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </TextField> */}
        </div>
        <div className='col-md-2'>
          {/* <TextField
            id='outlined-select-currency-native'
            select
            label='Subject Code'
            // value={subject}
            onChange={handleChangeSubject}
            SelectProps={{
              native: true,
            }}
            helperText='Please'
            variant='outlined'
          >
            {console.log(subjects)}
            {subjects.map((subject) => (
              <option key={subject?.id} value={subject?.id}>
                {subject?.subject_code}
              </option>
            ))}
          </TextField> */}
        </div>
        <div className='col-md-2'>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>Year</InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              // value={age}
              onChange={handleChangeYear}
              label='Year'
            >
              {[1, 2, 3, 4].map((year, index) => (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='col-md-2'>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Subject Code
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              // value={age}
              onChange={handleChangeSubject}
              label='Subject Code'
            >
              {subjects.map((subject) => (
                <MenuItem key={subject?.id} value={subject?.id}>
                  {subject?.subject_code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  );
};

export default connect(null, {
  getStudentByStudentIdndAcadomicYear,
  getSubjectByAcadamicYear,
})(LecturerViewUpporRow);
