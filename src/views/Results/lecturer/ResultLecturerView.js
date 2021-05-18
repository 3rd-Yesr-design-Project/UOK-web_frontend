import React from 'react';
import { Container } from 'react-bootstrap';

import LecturerResultTable from './LecturerResultTable';
import LecturerViewUpporRow from './LecturerViewUpporRow';
import HomeLayout from '../../../componet/layout/HomeLayout';

const ResultsView = () => {
  return (
    <HomeLayout>
      <Container>
        <LecturerViewUpporRow />
        <LecturerResultTable />
      </Container>
    </HomeLayout>
  );
};

export default ResultsView;
