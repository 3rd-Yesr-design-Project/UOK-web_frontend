import React from 'react';
import ResultsStudentView from './student/ResultsStudentView';
import ResultLecturerView from './lecturer/ResultLecturerView';
import { connect } from 'react-redux';
import Spinner from '../../componet/common/Spinner';

import 'react-toastify/dist/ReactToastify.css';

const Result = ({ user }) => {
  return (
    <div>
      {user?.user_type === 'student' ? (
        <ResultsStudentView />
      ) : user?.user_type === 'lecturer' ? (
        <ResultLecturerView />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state?.user?.user,
  };
};

export default connect(mapStateToProps)(Result);
