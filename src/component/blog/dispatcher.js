import { VIEW_POST, LOADED_POST } from '../../action/blog'
import { requestPost } from '../../api/postApi'

export const dispatcher = dispatch => {
    return {

        loadPost(params) {
            dispatch(dispatch => {
                return requestPost(params).then(data => {
                    return dispatch({ type: LOADED_POST, payload: data })
                });
            });
        },

        viewPost(id) {
            return dispatch({ type: VIEW_POST, id })
        }
    }
};