import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Login from "../pages/Login";
import Event from "../pages/Event";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
      <Route path={'*'} element={<Navigate to="/login" />} />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Event />} />
      <Route path={'*'} element={<Navigate to="/" />} />
    </Routes>
  );
};
