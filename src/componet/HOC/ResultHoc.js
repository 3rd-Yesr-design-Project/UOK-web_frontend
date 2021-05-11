import React from 'react';
import { connect } from 'react-redux';

const ResultHoc = ({ component, user }) => {
  return <div>{}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(ResultHoc);
