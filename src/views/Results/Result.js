import React from 'react';
import ResultsStudentView from './student/ResultsStudentView';
import ResultLecturerView from './lecturer/ResultLecturerView';
import { connect } from 'react-redux';
import Spinner from '../../componet/common/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = ({ user }) => {
  console.log('xxxxxxxxxx', user?.usertype);
  return (
    <div>
      {user?.user_type == 'student' ? (
        <ResultsStudentView />
      ) : user?.user_type == 'lecturer' ? (
        <ResultLecturerView />
      ) : (
        <Spinner />
      )}

      {/* <ResultLecturerView /> */}

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
