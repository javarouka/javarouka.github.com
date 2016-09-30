export const blogRecentlySelector = state => {
    return {
        routing: state.routing,
        articles: state.app.entities.articles
    }
};

export const postSelector = state => {
    return {
        routing: state.routing,
        articles: { ...state.app.entities.articles }
    }
};

