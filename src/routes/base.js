import App from '../container/App'
import Index from '../container/Index'
import Presentation from '../container/Presentation'
import Blog from '../container/Blog'

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