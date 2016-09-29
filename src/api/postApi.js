import axios from 'axios'

export function requestPost(id) {
    return axios(`/data/post/${id}.json`);
}