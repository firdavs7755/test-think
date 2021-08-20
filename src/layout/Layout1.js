import React, {useState} from 'react'
import {Menu, Layout, Affix} from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined, UsbTwoTone,
} from '@ant-design/icons';
import {Link} from "react-router-dom";
const {Sider,Header,Content,Footer} = Layout;
const style={
    width:'1000px',
    height:'150px',
    border:'1px solid red'
}
function Layout1(props) {
    const[open,setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Layout >
                <Sider style={{ minHeight: '100vh',backgroundColor:'white'}} width={240} trigger={open} collapsible >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{  borderRight: 0,position:"fixed" }}
                    >
                        <Menu.Item key="1" icon={<DesktopOutlined />}> <Link style={{textDecoration:'none'}} to={'/posts'}>posts</Link></Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}><Link style={{textDecoration:'none'}} to={'/comments'}>comments</Link></Menu.Item>
                        <Menu.Item key="3" icon={<FileOutlined />}>option5</Menu.Item>
                        <Menu.Item key="4" icon={<TeamOutlined />}>option5</Menu.Item>
                        <Menu.Item key="5" icon={<UserOutlined />}>option9</Menu.Item>
                        <Menu.Item key="5" icon={<UsbTwoTone />}>option9</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{position:"relative"}}>
                    <Affix offsetTop={0}>
                        <Header style={{backgroundColor:'white',height:'48px',zIndex:3}}>
                            <h2 style={{textAlign:'center'}}>Header</h2>
                        </Header>
                    </Affix>
                    <Content >
                        {props.children}
                    </Content>
                    <Footer style={{backgroundColor:'rgba(10,54,121,0.82)',height:'48px'}}>
                        <h5 style={{textAlign:'center',color:'#f1f1f1'}}>Footer</h5>
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}
export default Layout1
