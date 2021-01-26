import React, { useCallback, useRef, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,  MenuFoldOutlined,  PieChartOutlined,  MailOutlined, 
  UserOutlined, UnlockOutlined,  SettingOutlined,  PoweroffOutlined, 
  MessageOutlined, BellOutlined,  CloseOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
import {useMappedState, useDispatch} from 'redux-react-hook';
const { SubMenu } = Menu;
import './index.css';
import useClickOutside from '@/hooks/useClickOutside';
import {history} from 'umi';
import { IState, ITab } from '@/store';

const defaultMenus = [{
  name: 'Navigation One',
  subMenus: [
    { name: 'Option1' },
    { name: 'Option2' },
    { name: 'Option3' },
  ]
}]

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
  }

  const [menus] = useState(defaultMenus);

  const mapTabs = useCallback((state: IState) => {
    return {
      stateTabs: state.tabs
    }
  },[]);
  const {stateTabs} = useMappedState(mapTabs);
  const handleTabClose = useCallback((tab, e) => {
    e.stopPropagation();
    dispatch({
      type: 'close-tab',
      payload: tab
    })
  },[]);
  const handleTabClick = useCallback((tab: ITab) => {
    dispatch({
      type: 'switch-tab',
      payload: tab
    });
    if (!tab.params) {
      history.push("/pages/"+tab.name);
    } else {
      history.push({
        pathname: "/pages/"+tab.name,
        search: tab.params.search
      });
    }
  }, []);
  const handleMenuClick = useCallback((optName) => {
    dispatch({
      type: 'add-tab',
      payload: {
        optName
      }
    });
    history.push("/pages/"+optName);
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
            {menus && menus.map(menu => {
              return (
                <SubMenu key="sub1" icon={<MailOutlined />}
                  title={menu.name}
                >
                  {menu.subMenus && menu.subMenus.map(submenu => (
                    <Menu.Item key={submenu.name} icon={<PieChartOutlined />}
                    onClick={() => handleMenuClick(submenu.name)}
                   >
                     {submenu.name}
                   </Menu.Item>
                  ))}
                </SubMenu>
              )
            })}
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
                stateTabs && stateTabs.map(tab => {
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
