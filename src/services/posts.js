import {axiosInstance} from './api'

export const postApi = {
    getPosts:()=>{
        return axiosInstance.get('/posts');
    },
    getOnePost:(postId)=>{
        return axiosInstance.get( `/posts/${postId}`)
    }
}
