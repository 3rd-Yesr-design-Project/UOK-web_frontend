import httpService from './HttpService';

class CommentService {
    addComment(data) {
        return httpService.post(`/comment`, data);
    }
}

export default new CommentService();