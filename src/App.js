import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "./components/post/Posts";
import Comments from "./components/comments/Comments";
import APost from "./components/post";
import AComment from "./components/comments";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout1 from "./layout/Layout1";
import PostDescribe from "./components/post/PostDescribe";
import CommentDescribe from "./components/comments/CommentDescribe";
import React from "react";


function App() {
  return (
    <Layout1>
      <Switch>
          <Route exact path={'/posts'} component={Posts}/>
          <Route exact path={'/comments'} component={Comments}/>
          <Route exact path={'/posts/:id'} component={PostDescribe}/>
          <Route exact path={'/comments/:id'} component={CommentDescribe}/>
          <Route render={() => <Redirect to="/posts"/>}></Route>
      </Switch>
    </Layout1>
  );
}

export default App;
