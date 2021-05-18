import httpService from './HttpService';

class ResultService {
  fethcStudentResultByUserIdAndYear(year) {
    return httpService.get(`/student/subject/${year}`);
  }

  getSubjectsByYear(year) {
    return httpService.get(`/year/subject/${year}`);
  }

  getStudentByAcadomicYearAndSubjectId(academicYear, subjectId) {
    return httpService.get(`/subject/${academicYear}/${subjectId}`);
  }

  updateStudentResults(payload) {
    return httpService.put('/result', payload);
  }
}

export default new ResultService();
