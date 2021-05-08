// import HttpService from './HttpService';
// import { API } from '../utils/config';

// class ResultServices extends HttpService {
//   addSubject = async (payload) => {
//     return await this.sendRequest({
//       method: 'POST',
//       url: API.addSubject,
//       responseType: 'json',
//       data: payload,
//     });
//   };

//   addSubjectByUserId = async (payload) => {
//     return await this.sendRequest({
//       method: 'POST',
//       url: API.addSubject + '/user',
//       responseType: 'json',
//       data: payload,
//     });
//   };

//   getSubjectByUserIdAndYear = async (uid, year) => {
//     return await this.sendRequest({
//       method: 'GET',
//       url: API.addSubject + '/' + uid + '/' + year,
//       responseType: 'json',
//     });
//   };

//   addSubjectResult = async (uid, payload) => {
//     return await this.sendRequest({
//       method: 'PUT',
//       url: API.addSubject + '/result' + uid,
//       responseType: 'json',
//       data: payload,
//     });
//   };
// }

// const resultServices = new ResultServices();
// export default resultServices;

import httpService from './HttpService';
import { useSelector, useDispatch } from 'react-redux';

class ResultService {
  fethcStudentResultByUserIdAndYear(year) {
    return httpService.get(`/student/subject/${year}`);
  }

  getSubjectsByYear(year, authorization) {
    console.log(authorization);
    return httpService.get(`/year/subject/${year}`, {
      headers: { authorization },
    });
  }

  getStudentByAcadomicYearAndSubject(academicYear, subjectId, authorization) {
    return httpService.get(`/subject/${academicYear}/${subjectId}`, {
      headers: { authorization },
    });
  }
}

export default new ResultService();
