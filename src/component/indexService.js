import { INIT_APP } from '../action/base'
import { LOAD_RECENTLY } from '../action/blog'
import { requestRecentlyPost } from '../api/postApi'

export default dispatch => ({
    initialize() {
        requestRecentlyPost()
            .then(payload => dispatch({ type: LOAD_RECENTLY, payload }))
            .then(_=> dispatch({ type: INIT_APP }))
    }
});