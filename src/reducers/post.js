import Post from '../structor/Post'
const defaultState = {
    currentDate: new Date(),
    articles: [
        new Post({ id: 1, title: 'Hello', content: 'world' })
    ]
};
export default function post(state = defaultState, action) {
    return state;
}