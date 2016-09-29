const postIdVar = new WeakMap();
const postTitleVar = new WeakMap();
const postContentVar = new WeakMap();
export default class Post {

    constructor({ id, title, content }) {
        postIdVar.set(this, id);
        postTitleVar.set(this, title);
        postContentVar.set(this, content);
    }

    get id() { return postIdVar.get(this); }
    get title() { return postTitleVar.get(this); }
    get content() { return postContentVar.get(this); }
}