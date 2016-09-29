import App from '../container/App'
import Index from '../component/Index'
import Presentation from '../component/career/Presentation'
import Blog from '../component/blog/Blog'
import Post from '../component/blog/Post'

export default {
    path: '/',
    component: App,
    indexRoute: { component: Index },
    childRoutes: [
        { path: 'home', component: Index },
        { path: 'pt', component: Presentation },
        { path: 'blog', component: Blog },
        { path: 'post/:year/:month/:file', component: Post }
    ]
};