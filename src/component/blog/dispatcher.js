import { VIEW_POST } from '../../action/blog'
import { requestPost } from '../../api/postApi'

export const dispatcher = dispatch => {
    return {

        loadPost(id) {
            requestPost(id).then(data => {
                dispatch({ type: 'LOADED_POST', payload: data })
            });
        },

        viewPost(id) {
            return dispatch({ type: VIEW_POST, id })
        }
    }
};