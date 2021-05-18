import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchResultByUserIdAndYear } from '../../Action/ResultActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Subject, Subjectcode, Grade) {
  return { Subject, Subjectcode, Grade };
}

const ResultTable = ({ results }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align='right'>Subjectcode</TableCell>
            <TableCell align='right'>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results?.map((result) => (
            <TableRow key={result?.id}>
              <TableCell component='th' scope='row'>
                {result?.subject?.subject}
              </TableCell>
              <TableCell align='right'>
                {result?.subject?.subject_code}
              </TableCell>
              <TableCell align='right'>{result?.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.result.results,
  };
};

export default connect(mapStateToProps, { fetchResultByUserIdAndYear })(
  ResultTable
);
