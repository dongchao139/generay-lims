import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import CSSTransition from "react-transition-group/CSSTransition";
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

import './index.css';
/**
 * 全局layout
 * @param props
 * @constructor
 */
const DefaultLayout: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(collapsed => {
      return !collapsed;
    })
  }
  // 基础布局
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='sider-logo'>
          <a>
            <span className='logo'></span>
            <CSSTransition in={!collapsed} animation='toggle-show' timeout={300}>
              <h1>
                NetStar LIMS
              </h1>
            </CSSTransition>
          </a>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
          </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
          </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
          </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className="site-layout-background" style={{padding: 0}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleCollapsed
          })}
        </Header>
        <Content style={{padding: '1em'}}>
          {props.children}
        </Content>
        <Footer className='site-layout-background'>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
