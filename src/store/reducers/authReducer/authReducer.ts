import {AuthActionsEnum, AuthActionsType, AuthInitialStateType} from "./authReducerTypes";
import {IUser} from "../../../models/IUser";

const authInitialState: AuthInitialStateType = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: ''
}

export default function authReducer(state = authInitialState, action: AuthActionsType): AuthInitialStateType {
  switch (action.type) {
    case AuthActionsEnum.SET_IS_AUTH: {
      return {...state, isAuth: action.payload}
    }
    case AuthActionsEnum.SET_ERROR: {
      return {...state, error: action.payload}
    }
    case AuthActionsEnum.SET_IS_LOADING: {
      return {...state, isLoading: action.payload}
    }
    case AuthActionsEnum.SET_USER: {
      return {...state, user: action.payload}
    }

    default: return state;
  }
}
