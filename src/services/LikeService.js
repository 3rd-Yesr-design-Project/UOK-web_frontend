import React from 'react';
import httpService from './HttpService';

class LikeService {
    addLike(post_id, payload) {
        return httpService.put( `/like/${post_id}`, payload);
    }
    deleteLike() {}
}

export default new LikeService();