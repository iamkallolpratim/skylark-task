import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import {removeCookies} from '../helpers/utils';

const { Sider } = Layout;


class SideBar extends Component {


    logout = () => {
        removeCookies('access_token');
        this.props.history.push('/');
    }
    render() {
        const { match } = this.props;
        const { location } = this.props;
        return (
            <React.Fragment>
                <Sider trigger={null} collapsible={true} collapsed={this.props.collapsed} width={250} breakpoint="lg"
                className="sidebar"

                >
                    <div className="logo">
                        <h3>{this.props.collapsed ? 'SD' : 'Skylark Drones'}</h3>
                    </div>
                    <Menu className="sidebar-menu" theme="dark" mode="inline" defaultSelectedKeys={[`${match.path}/`]} selectedKeys={[location.pathname]}>
                        <Menu.Item key={`${match.path}`}>
                            <NavLink exact to={`${match.path}`}><Icon type="dashboard" />
                                <span>Dashboard</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item>
                            <a role="button" onClick={this.logout}><Icon type="poweroff" />
                                <span>Logout</span>
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>

            </React.Fragment>
        );
    }

}

export default withRouter(SideBar);