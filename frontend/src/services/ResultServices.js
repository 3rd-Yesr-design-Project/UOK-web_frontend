import HttpService from './HttpService';
import { API } from '../utils/config';
import httpService from './HttpService';

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

class ResultServices{
  getSubjectByUserIdAndYear = (id,year) => {
    return httpService.get(`/subject/${userId}/${year}`);
  }

  addSubjectResult(id,payload){
    return httpService.put(`/subject/result/${id}`,payload)
  }

  getSubjectByStudentNoAndYear(){
    return httpService.get(`/user/subject/${year}/${studentNo}`)
  }
}

const resultServices = new ResultServices();
export default resultServices;
