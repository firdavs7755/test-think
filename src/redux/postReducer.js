import {
    ADD_POST,
    SET_DATA,
} from "./actions/action-types";

const INITIAL_STATE = {
    post:[],
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,post: action.payload
            }
        default:
            return state
    }
}

export default postReducer;
