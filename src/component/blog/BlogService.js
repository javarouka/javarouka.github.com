//const selectActivePost = state => {
//    const { app: { entities, ui } } = state;
//    return entities.post.articles.find(article => article.id === ui.activePost);
//};

export const blogRecentlySelector = state => {
    return {
        routing: state.routing,
        post: state.app.entities.post
    }
};

export const postSelector = state => {
    return {
        routing: state.routing
    }
};

