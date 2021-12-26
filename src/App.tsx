import React from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import NavBar from "./components/NavBar";

function App() {
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
