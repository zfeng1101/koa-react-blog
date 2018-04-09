import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './styles/common';
import './styles/home'

const history = createBrowserHistory();

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() { 
      return (
        <Layout>
        {
           history.location.pathname != '/login'  ?  
            <Header className='layout-header' style={{ width: '100%'}} >
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '49px',width: 1000,margin:'0 auto' }}
                >
                    <Menu.Item key="1">
                        <Link to="/home">博客首页</Link>
                    </Menu.Item>
                    <SubMenu title={<span>博客管理</span>}>
                        <Menu.Item key="setting:1"><Link to="/list">我的博客</Link></Menu.Item>
                        <Menu.Item key="setting:2">博客修改</Menu.Item>
                        <Menu.Item key="setting:3">博客删除</Menu.Item>
                        <Menu.Item key="setting:4"><Link to="/addblog">博客新增</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">
                        我的个人信息
                    </Menu.Item>
                </Menu>
            </Header>
            :
            ''
        }
          
            <Content style={{ width: 1000, margin:'59px auto 0 auto' }}>
                <div style={{ padding: 10, minHeight: 380 }}> 
                    {this.props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center',borderTop: '1px solid #ccc',position:'fixed',bottom:0,zIndex:999,width:'100%' }}>
                博客管理系统
            </Footer>
        </Layout>
      )
    }
}
export default App