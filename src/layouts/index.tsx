import React, { useCallback, useRef, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  AppstoreOutlined,  MenuUnfoldOutlined,  MenuFoldOutlined,  PieChartOutlined,  
  DesktopOutlined,  ContainerOutlined,  MailOutlined,  UserOutlined, 
   UnlockOutlined,  SettingOutlined,  PoweroffOutlined,  MessageOutlined,
  BellOutlined,  CloseOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
import {useMappedState, useDispatch} from 'redux-react-hook';
const { SubMenu } = Menu;
import './index.css';
import useClickOutside from '@/hooks/useClickOutside';

interface ITab {
  name: string;
  active: boolean;
}

const defaultTabs: ITab[] = [
  {name: 'Option 1', active: true},
] 

/**
 * 全局layout（除登录页以外）
 * @param props
 * @constructor
 */
const DefaultLayout: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [inlineCollapsed, setInlineCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(collapsed => {
      return !collapsed;
    })
  }
  const toggleInlineCollapsed = () => {
    setInlineCollapsed(collapsed => {
      return !collapsed;
    });
  }
  const paddingLeft = collapsed ? '0.55em' : '1.25em';

  const mapState = useCallback(state => {
      console.log(state);
      return {
          auth: state.auth
      }
  },[]);
  const {auth} = useMappedState(mapState);
  const userName = auth && auth.userName;

  const [showLogoutMenu, setShowLogoutMenu] = useState<boolean>(false);
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setShowLogoutMenu(false);
  });

  const dispatch = useDispatch();
  const handlePowerOff = () => {
    dispatch({
      type: 'logout'
    });
    console.log('handlePowerOff');
  }
  const [tabs, setTabs] = useState<ITab[]>(defaultTabs);
  const handleTabClose = useCallback((tab, e) => {
    e.stopPropagation();
    setTabs(tabs => {
      const newTabs = tabs.filter(t => {
        if (t.name === tab.name) {
          return false;
        }
        return true;
      });
      if (newTabs.length > 0) {
        newTabs[0].active = true;
      }
      return newTabs;
    })
  },[]);
  const handleTabClick = useCallback((tab) => {
    setTabs(tabs => {
      const newTabs = tabs.map(t => {
        if (t.name === tab.name) {
          t.active = true;
        } else {
          t.active = false;
        }
        return t;
      });
      return newTabs;
    });
  }, []);
  const handleMenuClick = useCallback((optName) => {
    setTabs(tabs => {
      let newTabs = tabs.map(t => {
        if (t.name !== optName) {
          t.active = false;
        } else {
          t.active = true;
        }
        return t;
      });
      if (newTabs.filter(t => t.name === optName).length === 0) {
        newTabs = [...newTabs, {name: optName, active: true}];
      };
      return newTabs;
    });
  },[]);
  // 基础布局
  return (
    <Layout style={{ minHeight: '100%' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}
          collapsedWidth='3em'
        >
          <div className='sider-logo' style={{ paddingLeft: paddingLeft }}>
            <a>
              <span className='logo'></span>
              <h1>
                Generay LIMS
            </h1>
            </a>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline" theme="dark"
            inlineCollapsed={inlineCollapsed}
            collapsedWidth='3em'
          >
            <SubMenu key="sub1" icon={<MailOutlined />}
              title="Navigation One"
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}
               onClick={() => handleMenuClick('Option 1')}
              >
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}
                onClick={() => handleMenuClick('Option 2')}
              >
                Option 2
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}
                onClick={() => handleMenuClick('Option 3')}
              >
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
          <Button type="link" onClick={toggleInlineCollapsed} className='menu-toggle'
          >
            {!collapsed && (inlineCollapsed ? 'open' : 'collapse')}
          </Button>
        </Sider>
        <Layout className='site-layout'>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleCollapsed
            })}
            <ul className="header-tabs">
              {
                tabs && tabs.map(tab => {
                  const clsName = tab.active ? "checked": "";
                  return <li className={clsName} onClick={() => handleTabClick(tab)}>
                      {tab.name}
                      {tab.active ? 
                      <CloseOutlined className="icon-close"
                        onClick={(e) => handleTabClose(tab,e)}
                      />: null}
                  </li>
                })
              }
            </ul>
            <BellOutlined className="pull-right header-icon" />
            <MessageOutlined className="pull-right header-icon" />
            <div className="user-info pull-right" 
             onClick={() => setShowLogoutMenu(show => !show)}
             ref={ref}
            >
              <UserOutlined />
              <span>{userName}</span>
              {showLogoutMenu ? 
                <ul className="dropdown-menu">
                  <li><UnlockOutlined className="dropdown-menu-icon" />修改密码</li>
                  <li><SettingOutlined className="dropdown-menu-icon" />设置</li>
                  <li onClick={handlePowerOff}>
                    <PoweroffOutlined className="dropdown-menu-icon" />
                    注销
                    </li>
                </ul>: null
              }
            </div>
          </Header>
          <Content style={{ padding: '1em' }}>
            {props.children}
          </Content>
          <Footer className='site-layout-background'>Footer</Footer>
        </Layout>
      </Layout>
  );
};
export default DefaultLayout;
