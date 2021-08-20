import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "./Posts";
import PostDescribe from "./PostDescribe";

function APost() {
    return(
        <>
            <Route path={'/'} component={Posts}/>
            <Route path={'/:id'} component={PostDescribe}/>
        </>
    )
}
export default APost;
