import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';

const { Sider } = Layout;


class SideBar extends Component {
    render() {
        const { match } = this.props;
        const { location } = this.props;
        return (
            <React.Fragment>
                <Sider trigger={null} collapsible={true} collapsed={this.props.collapsed} width={250} breakpoint="lg"
                className="sidebar"

                >
                    <div className="logo">
                        <h3>{this.props.collapsed ? 'WH' : 'WAREHOUSE'}</h3>
                    </div>
                    <Menu className="sidebar-menu" theme="dark" mode="inline" defaultSelectedKeys={[`${match.path}/`]} selectedKeys={[location.pathname]}>
                        <Menu.Item key={`${match.path}`}>
                            <NavLink exact to={`${match.path}`}><Icon type="dashboard" />
                                <span>Dashboard</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key={`${match.path}/products`}>
                            <NavLink exact to={`${match.path}/products`}><Icon type="qrcode" />
                                <span>Products</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>

            </React.Fragment>
        );
    }

}

export default withRouter(SideBar);