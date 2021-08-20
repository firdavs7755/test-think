import React, {useEffect, useState} from 'react';
import {postApi} from "../../services/posts";
import {connect, useDispatch} from "react-redux";
import {setData} from "../../redux/actions/postAction";
import {createStructuredSelector} from "reselect";
import {selectData} from "../../redux/actions/post_selector";
import {Button, Modal, Table,message} from "antd";
import {store} from "../../redux/store";
import PostModal from "../modal/postModal";
import {Link,useHistory} from "react-router-dom";


function Posts({SETDATA,DATA,match}) {
    const history=useHistory();
    const [eObj,setEObj] = useState({})
    const [isE,setIsE] = useState(false)
    const bringPosts=()=>{
        postApi.getPosts()
            .then(res=> {
                console.log('res', res.data)
                SETDATA(res.data)
            })
    }
    const success=()=>{
        message.success('post deleted...');
    }
    useEffect(()=>{
        bringPosts()
    },[]);
    const removePost=(id)=>{
        let newData=DATA.filter(item=>item.id!==id)
        console.log('newData',newData)
        SETDATA(newData);
        success();
    }
    const editPost=(id)=>{
        setEObj(DATA.find(item=>item.id===id));
        setIsE(true)
    }
    const dataSource = DATA
    const columns = [
        {
            title: 'TR',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render:(text)=>(
                <p>{text.substr(0,20)}</p>
            )
        },
        {
            title: 'body',
            dataIndex: 'body',
            key: 'body',
            render:(text)=>(
                <p>{text.substr(0,50)}</p>
            )
        },
        {
            title: 'actions',
            dataIndex: `actions`,
            key: 'actions',
            render:(text,obj,record)=>(
                <div className={'d-flex justify-content-around'}>
                    <Button type={'danger'} onClick={()=>removePost(obj.id)}>delete</Button>
                    <Button style={{backgroundColor:'#EEBE21'}} onClick={()=>editPost(obj.id)}>edit</Button>
                    <Button style={{backgroundColor:'rgba(123,174,210,0.74)'}}><Link to={`/posts/${obj.id}`}>View</Link></Button>
                </div>
            )
        },
    ];

    return(
        <>
            {console.log('obj',eObj)}
            {console.log('DATA',DATA)}
            {console.log('isE',isE)}
            <div style={{padding:'15px'}}>
                <PostModal isE={isE} setIsE={setIsE} eObj={eObj}/>
                <div>
                    <Table dataSource={dataSource} columns={columns} bordered/>
                </div>
            </div>
        </>
    )
}

const mstp = createStructuredSelector({
    DATA:selectData
})
const mdtp = dispatch =>({
    SETDATA:(data)=>dispatch(setData(data)),
})
export default connect(mstp,mdtp) (Posts)
