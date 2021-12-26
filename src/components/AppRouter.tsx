import React from 'react';
import {PrivateRoutes, PublicRoutes} from "../router/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter:React.FC = () => {

  const {isAuth} = useTypedSelector(state => state.authReducer)

  return (
    isAuth
      ? <PrivateRoutes />
      : <PublicRoutes />
  );
};

export default AppRouter;
