import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import NavBar from "./components/NavBar";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

function App() {

  const {setUser, setIsAuth} = useActions()

  useEffect(()=>{
    if(localStorage.getItem('isAuth')) {
      setUser({username: localStorage.getItem('userName') || ''} as IUser)
      setIsAuth(true)
    }
  },[])

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
