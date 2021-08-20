import {
    ADD_POST,
    GET_DATA,
    SET_DATA,
} from "./action-types";

export const setData=data=>({
    type:SET_DATA,
    payload:data
})
export const addPost=data=>({
    type:ADD_POST,
    payload:data
})
