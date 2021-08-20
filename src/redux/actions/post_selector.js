import {createSelector, createStructuredSelector} from 'reselect'
//above is simple selector
const postSelector = state => state.posts

//above are Reselect functions
export const selectData = createSelector(
    [postSelector],
    posts=>posts.post
)
export const selectPersonalData = createSelector(
    [postSelector],
    posts=>posts.personalData
)
export const selectToken = createSelector(
    [postSelector],
    posts=>posts.token
)
