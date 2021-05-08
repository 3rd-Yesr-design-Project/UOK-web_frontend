import React, { useState } from 'react';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import resultService from '../../../services/ResultServices';
import { getStudentBySubjectIdndAcadomicYear } from '../../../Action/studentAction';

const LecturerViewUpporRow = ({ getStudentBySubjectIdndAcadomicYear }) => {
  const [academicYear, setAcademicYear] = useState(null);
  const [year, setYear] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [subjects, setSubjects] = useState([]);

  const handleChangeYear = async (e) => {
    console.log('ppppppppp', e.target.value);
    setYear(e.target.value);
    try {
      const subjects = await resultService.getSubjectsByYear(e.target.value);
      setSubjects(subjects.data.data);
      console.log(subjects.data.data);

      //   getSubjectByAcadamicYear(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSubject = async (e) => {
    console.log(e.target.value);
    setSubjectId(e.target.value);
    try {
      console.log(academicYear, subjectId);
      const students = await resultService.getStudentByAcadomicYearAndSubjectId(
        academicYear,
        e.target.value
      );
      console.log('xxxxxxxxxxxx', students);
      //   setStudents(students?.data?.data);

      getStudentBySubjectIdndAcadomicYear(students.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='mt-5'>
      <div className='row'>
        <div className='col-md-2'>
          <TextField
            id='outlined-textarea'
            label='Academic Year'
            placeholder='Placeholder'
            multiline
            variant='outlined'
            onChange={(e) => setAcademicYear(e.target.value)}
          />
        </div>
        <div className='col-md-2'>
          <TextField
            id='outlined-select-currency-native'
            select
            label='Native select'
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
          </TextField>
        </div>
        <div className='col-md-2'>
          <TextField
            id='outlined-select-currency-native'
            select
            label='Native select'
            // value={subject}
            onChange={handleChangeSubject}
            SelectProps={{
              native: true,
            }}
            helperText='Please select your currency'
            variant='outlined'
          >
            {console.log(subjects)}
            {subjects.map((subject) => (
              <option key={subject?.id} value={subject?.id}>
                {subject?.subject_code}
              </option>
            ))}
          </TextField>
        </div>
        <div className='col-md-6'></div>
      </div>
    </div>
  );
};

export default connect(null, { getStudentBySubjectIdndAcadomicYear })(
  LecturerViewUpporRow
);
