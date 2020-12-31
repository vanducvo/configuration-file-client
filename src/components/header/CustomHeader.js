import { Layout, Menu } from 'antd';
import { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

const { Header } = Layout;
function CustomHeader(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.activeIndex]}>

          {!props.isLogin &&
            <Fragment>
              <Redirect exact from="/" to="/login" />

              <Menu.Item key="1">
                <Link to='/login'>
                  Login
            </Link>
              </Menu.Item>


              <Menu.Item key="2">
                <Link to='/register'>
                  Register
            </Link>
              </Menu.Item>
            </Fragment>
          }

          {props.isLogin &&
            <Fragment>
              <Menu.Item key="1">
                <Link to='/'>
                  Home
                </Link>
              </Menu.Item>


              <Menu.Item key="2">
                <Link to='/logout'>
                  Logout
                </Link>
              </Menu.Item>
            </Fragment>
          }
        </Menu>
      </Header>
    </Layout>
  );
}

export default CustomHeader;