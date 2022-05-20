import React from 'react'
import './a.css'
import { Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
export default () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Row>
            <Col className ="col" span={24}>col</Col>
          </Row>
          <Row>
            <Col className ="col" span={12}>col-12</Col>
            <Col className ="col" span={12}>col-12</Col>
          </Row>
          <Row>
            <Col className ="col" span={8}>col-8</Col>
            <Col className ="col" span={8}>col-8</Col>
            <Col className ="col" span={8}>col-8</Col>
          </Row>
          <Row>
            <Col className ="col" span={6}>col-6</Col>
            <Col className ="col" span={6}>col-6</Col>
            <Col className ="col" span={6}>col-6</Col>
            <Col className ="col" span={6}>col-6</Col>
          </Row>
          <Row>
            <Col className ="col" span={8}>col-6</Col>
            <Col className ="col" span={8} offset={8}>col-8</Col>
          </Row>
          <Row>
            <Col className ="col" span={6} offset={6}>col-6 col-offset-6</Col>
            <Col className ="col" span={6} offset={6}>col-6 col-offset-6</Col>
          </Row>
          <Row>
            <Col className ="col" span={12} offset={6}>col-12 col-offset-6</Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);