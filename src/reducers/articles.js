import Post from '../structor/Post'
import { LOAD_RECENTLY, VIEW_POST, LOADED_POST } from '../action/blog'

const defaultState = [];

const transformLoadedPost = (prev, action) => {
    const {
        payload: displayHtml
    } = action;

    return { ...prev, displayHtml };
};

const transformLoadRecently = (prev, action) => {
    const {
        payload: {
            totalPost = 0,
            recently = []
        }
    } = action;
    return { ...prev, totalPost, recently }
};

export default function post(state = defaultState, action) {
    const { type } = action;
    switch (type) {
        case LOAD_RECENTLY: return transformLoadRecently(state, action);
        case LOADED_POST: return transformLoadedPost(state, action);
        default: return state;
    }
}