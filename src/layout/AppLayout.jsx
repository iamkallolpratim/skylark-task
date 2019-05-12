import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { AppHolder } from './CommonStyle';
import Sidebar from './Sidebar';
import AppRouter from '../routes/AppRouter';
import PublicRouter from '../routes/PublicRouter';
import {isAuthnicated} from '../helpers/utils';

const { Header, Content } = Layout;

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
    const isAuth =  isAuthnicated();
    return (
      <React.Fragment>
        {
          !isAuth?
          <Layout style={{ height: "100vh" }}>
              <Layout style={{ height: "100vh" }}>
                <Content className="content" style={{ padding: 200, marginTop: 50 }}>
                  <PublicRouter {...this.props} />
                </Content>
              </Layout>
          </Layout>
          :
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
              
            </Layout>
          </Layout>
        </AppHolder>
        }
      </React.Fragment>
    );
  }
}


export default AppLayout;

