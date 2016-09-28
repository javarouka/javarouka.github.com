import App from '../container/App'
import Index from '../component/Index'
import Presentation from '../component/career/Presentation'
import Blog from '../component/Blog'

export default {
    path: '/',
    component: App,
    indexRoute: { component: Index },
    childRoutes: [
        { path: 'home', component: Index },
        { path: 'pt', component: Presentation },
        { path: 'blog', component: Blog }
    ]
};