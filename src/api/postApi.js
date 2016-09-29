import responseAnalyzer from './responseAnalyzer'
import axios from 'axios'

export function requestRecentlyPost() {
    return axios(`/data/post/postMeta.json`)
        .then(responseAnalyzer); // TODO 응답 검사 필요
}

export function requestPost({ year, month, file }) {
    return axios(`/data/post/${year}/${month}/${file}`)
        .then(responseAnalyzer);
}