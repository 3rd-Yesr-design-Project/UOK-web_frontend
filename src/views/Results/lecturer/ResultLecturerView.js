import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

import ellon from '../../../assets/ellon.jpg';
import ResultTable from '../../../componet/ResultTable';
import LecturerResultTable from './LecturerResultTable';
import LecturerViewUpporRow from './LecturerViewUpporRow';
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

const ResultsView = () => {
  const classes = useStyles();
  return (
    <HomeLayout>
      <Container>
        {/* <Row>
        <Col sm={4}>
          <Card>
            <CardContent>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Student Name
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Student No:
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Current GPA:
              </Typography>
            </CardContent>
          </Card>
        </Col>
        <Col sm={8}>set the Drop down</Col>
      </Row>
      <LecturerResultTable /> */}
        <LecturerViewUpporRow />
        <LecturerResultTable />
      </Container>
    </HomeLayout>
  );
};

export default ResultsView;
