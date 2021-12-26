import React from 'react';
import {Header} from "antd/es/layout/layout";
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

const NavBar:React.FC = () => {

  const {isAuth} = useTypedSelector(state => state.authReducer)

  const navigate = useNavigate()

  const onClickLogout = () => {
    console.log('Logout')
    navigate('/login')
  }

  const onClickLogin = () => {
    navigate('/')
  }
  return (
    <Layout>
      <Header className="header">
        {
          isAuth
            ?
            <Row justify={"end"}>
              <div className={"nav-bar"}>
                A500
              </div>
              <Menu theme="dark" mode="horizontal" selectable={false} style={{float: 'right'}} className={"nav-bar"}>
                <Menu.Item onClick={onClickLogout} key="1">Logout</Menu.Item>
              </Menu>
            </Row>
            :
            <Menu theme={"dark"} mode={"horizontal"} selectable={false} style={{float: 'right'}} className={"nav-bar"}>
              <Menu.Item onClick={onClickLogin} key="1">Login</Menu.Item>
            </Menu>
        }
      </Header>
    </Layout>
  );
};

export default NavBar;
