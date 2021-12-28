import React from 'react';
import {Header} from "antd/es/layout/layout";
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const NavBar:React.FC = () => {

  const {isAuth, user} = useTypedSelector(state => state.authReducer)
  const {logout} = useActions()

  const navigate = useNavigate()

  const onClickLogout = () => {
    logout()
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
                {user.username}
              </div>
              <Menu theme="dark" mode="horizontal" selectable={false} style={{float: 'right', minWidth: '100px'}} className={"nav-bar"}>
                <Menu.Item onClick={onClickLogout} key="1">Logout</Menu.Item>
              </Menu>
            </Row>
            :
            <Menu theme={"dark"} mode={"horizontal"} selectable={false} style={{float: 'right', minWidth: '100px'}} className={"nav-bar"} >
              <Menu.Item onClick={onClickLogin} key="1" >Login</Menu.Item>
            </Menu>
        }
      </Header>
    </Layout>
  );
};

export default NavBar;
