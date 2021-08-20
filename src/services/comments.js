import {axiosInstance} from './api'

export const commentsApi = {
    getComments:()=>{
        return axiosInstance.get('/comments');
    },
    getOneComment:(postId)=>{
        return axiosInstance.get( `/comments/${postId}`)
    }
}
