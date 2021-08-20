import React, {useState} from "react";
import {Button, Form, message, Input, Modal, Space, Affix} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectData} from "../../redux/actions/post_selector";
import {addPost, setData} from "../../redux/actions/postAction";
import {isVisible} from "bootstrap/js/src/util";


function PostModal({DATA,SETDATA,isE,setIsE,eObj,removePost}) {
    const [form] = Form.useForm();

    const [editingObj,setEditingObj] = useState({});
    const [visible, setVisible] = useState(isE);
    const closeModal = ()=>{
        setVisible(false);
        setIsE(false);
        form.resetFields()
    }
    const openModal = ()=>{
        setIsE(true);
    }
    const openAddModal=()=> {
        form.resetFields()
        setVisible(true);
    }

    const checkForm=()=>{
        if (isE){
            form.setFieldsValue({
                title: eObj.title,
                userId:eObj.userId,
                body:eObj.body
            });
        }
    }
    checkForm()
    const success = (text) => {
        message.success(text);
    };

    const error = () => {
        message.error('post no saved');
    };

    const warning = () => {
        message.warning('This is a warning message');
    };
    const handleSubmit = (values)=>{
        let obj ={userId:'',id:'',title:'',body:''};
        console.log('values',values)
        let data=[];
        if(isE){
            obj.title=values.title;
            obj.userId=values.userId;
            obj.body=values.body;
            obj.id=eObj.id;
            DATA[eObj.id-1]=obj;
            data = [...DATA];
            console.log('Edited',data);
            SETDATA(data);
            // removePost(eObj.id)
            form.resetFields();
            closeModal();
            success('post successfully updated...')
        }else {
            obj.title=values.title;
            obj.userId=values.userId;
            obj.body=values.body;
            obj.id=DATA.length+1;
            data = [...DATA,obj];
            console.log('data',data);
            SETDATA(data);
            form.resetFields();
            closeModal();
            success('post saved...')
        }

    }
    return(
        <>{console.log('keldi',eObj)}
            <Affix offsetTop={48}>
                <Button  onClick={() => openAddModal()} style={{float:'right',width:'25%'}} type={"primary"}>Add post</Button>
            </Affix>
            <Modal
                title="Add edit modal"
                centered
                visible={visible||isE}
                onOk={closeModal}
                onCancel={closeModal}
                width={700}
                footer={null}
            >
                <Form
                    form={form}
                    name="posts"
                    onFinish={handleSubmit}
                    scrollToFirstError
                >
                    <span>title</span>
                    <Form.Item
                        key="title"
                        name="title">
                        <Input
                            // defaultValue={eObj?eObj.userId:"df"}
                            size="middle"
                            placeholder="title" />
                    </Form.Item>
                    <span>UserId</span>
                    <Form.Item
                        key="userId"
                        name="userId">
                        <Input
                            size="middle"
                            placeholder="userId" />
                    </Form.Item>
                    <span>Text Body</span>
                    <Form.Item
                        key="body"
                        name="body">
                        <TextArea
                            size="middle"
                            placeholder="body" />
                    </Form.Item>
                    <Form.Item>
                        <div className="d-flex justify-content-between" style={{width:'100%'}}>
                            <Button block type={"danger"} style={{width:'48%'}} onClick={closeModal}>Cancel</Button>
                            <Button htmlType={'submit'} block  style={{width:'48%'}} type={"primary"} >Save</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
            <Space>

            </Space>

        </>
    )
}
const mstp = createStructuredSelector({
    DATA:selectData
})
const mdtp = dispatch =>({
    SETDATA:(data)=>dispatch(setData(data)),
})
export default connect(mstp,mdtp) (PostModal)
