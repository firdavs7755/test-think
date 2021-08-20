import React from "react";
import {Route} from "react-router-dom";
import Posts from "../post/Posts";
import PostDescribe from "../post/PostDescribe";
import Comments from "./Comments";
import CommentDescribe from "./CommentDescribe";

function AComment() {
    return(
        <>
            {/*<Route exact={true} path={'/'} component={Comments}/>*/}
            {/*<Route path={'/:id'} component={CommentDescribe}/>*/}
        </>
    )
}
export default AComment;
