import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Button,
} from '@material-ui/core';

import ResultTable from '../ResultTable';

import resultServices from '../../../services/ResultServices';

import { fetchResultByUserIdAndYear } from '../../../Action/ResultActions';
import { connect } from 'react-redux';
import HomeLayout from '../../../componet/layout/HomeLayout';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
});

const ResultsStudentView = ({ fetchResultByUserIdAndYear, user }) => {
  const classes = useStyles();

  useEffect(() => {
    getData(1);
  }, []);

  const getData = async (year) => {
    try {
      const result = await resultServices.fethcStudentResultByUserIdAndYear(
        year
      );

      fetchResultByUserIdAndYear(result.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <Container>
        <Row className='main-container'>
          <Col sm={4}>
            <Card>
              <CardMedia
                className={classes.media}
                image={user?.profile?.profile_url}
                title='Paella dish'
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color='textSecondary'
                  gutterBottom
                >
                  Student Name:
                  {user?.name}
                </Typography>
                <Typography
                  className={classes.title}
                  color='textSecondary'
                  gutterBottom
                >
                  Student No:
                  {user?.student?.student_no}
                </Typography>

                <Button
                  size='small'
                  variant='outlined'
                  fullWidth={true}
                  onClick={() => getData(1)}
                >
                  1st Year
                </Button>
                <Button
                  size='small'
                  variant='outlined'
                  fullWidth={true}
                  onClick={() => getData(2)}
                >
                  2nd Year
                </Button>
                <Button
                  size='small'
                  variant='outlined'
                  fullWidth={true}
                  onClick={() => getData(3)}
                >
                  3rd Year
                </Button>
              </CardContent>
            </Card>
          </Col>
          <Col sm={8}>
            <ResultTable />
          </Col>
        </Row>
      </Container>
    </HomeLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, { fetchResultByUserIdAndYear })(
  ResultsStudentView
);
