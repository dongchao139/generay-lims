import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

/**
 * 全局layout
 * @param props
 * @constructor
 */
const DefaultLayout: React.FC = (props: any) => {
  // 基础布局
  return (
    <Layout>
      <Header>Hello UMI</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          {props.children}
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};
export default DefaultLayout;
