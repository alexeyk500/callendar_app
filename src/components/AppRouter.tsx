import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Event from "../pages/Event";

const AppRouter:React.FC = () => {

  const auth = false

  return (
    auth
      ? <Routes>
          <Route path={'/'} element={<Event />} />
        </Routes>
      : <Routes>
          <Route path={'/login'} element={<Login />} />
        </Routes>
  );
};

export default AppRouter;
