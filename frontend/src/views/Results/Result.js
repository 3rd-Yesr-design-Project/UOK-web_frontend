import React from 'react';
import ResultsStudentView from './student/ResultsStudentView';
import ResultLecturerView from './lecturer/ResultLecturerView';
import { connect } from 'react-redux';

const Result = ({ user }) => {
  return (
    <div>
      {user?.usertype == 'student' ? (
        <ResultsStudentView />
      ) : (
        <ResultLecturerView />
      )}

      {/* <ResultLecturerView/> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state?.user?.user,
  };
};

export default connect(mapStateToProps)(Result);
