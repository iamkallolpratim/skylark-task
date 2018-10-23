import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { AppHolder } from './CommonStyle';
import Sidebar from './Sidebar';
import AppRouter from '../routes/AppRouter';

const { Header, Content, Footer } = Layout;

class AppLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppHolder>
          <Layout style={{ height: "100vh" }}>

            <Sidebar
              collapsed={this.state.collapsed}
            />
            <Layout>
              <Header style={{ background: '#fff', padding: 10 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />

              </Header>
              <Content className="content" style={{ padding: 24, marginTop: 10 }}>
                <AppRouter {...this.props} />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Warehouse  ©2018 DeepSpace9
              </Footer>
            </Layout>
          </Layout>
        </AppHolder>
      </React.Fragment>
    );
  }
}


export default AppLayout;

