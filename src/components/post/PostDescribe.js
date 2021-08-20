import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Button, Descriptions} from "antd";
import {createStructuredSelector} from "reselect";
import {selectData} from "../../redux/actions/post_selector";
import {setData} from "../../redux/actions/postAction";
import {connect} from "react-redux";

const style={
    fontWeight:500,
    fontSize:'16px'
}
const styleWrap={
    padding:'30px',
    margin:'15px',
    backgroundColor:'white',
    borderRadius:'7px',
    border:'1px solid #f1f1f1'
}
function PostDescribe({match,DATA}) {
    let history = useHistory();
    let {id}=match.params;
    console.log('id',id)
    let currentPost = DATA.find(item=>item.id===parseInt(id))
    useEffect(()=>{
        console.log('currentPost',currentPost)
    },[DATA]);
    return(
        <div style={styleWrap}>
            <div className="d-flex justify-content-between" >
                <div className={'d-flex justiy-content-between'}>
                    <p style={style}>sameId:</p>
                    <p>{id}</p>
                </div>
                <div className={'d-flex justiy-content-between'}>
                    <p style={style}>userId:</p>
                    <p>{currentPost.userId}</p>
                </div>
                <div className={'d-flex justiy-content-between'}>
                    <p style={style}>title:</p>
                    <p>{currentPost.title}</p>
                </div>
            </div>
            <div className="d-flex">
                <div style={{width:'33%'}} className={'d-flex justiy-content-between'}>
                    <p style={style}>body:</p>
                    <p>{currentPost.body}</p>
                </div>
            </div>

            {console.log('match',match.params.id)}
            <Button type={'ghost'} onClick={history.goBack}>Back</Button>
        </div>
    )
}
const mstp = createStructuredSelector({
    DATA:selectData
})
const mdtp = dispatch =>({
    SETDATA:(data)=>dispatch(setData(data)),
})
export default connect(mstp,mdtp) (PostDescribe)
