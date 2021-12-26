import {AuthActionEnum, AuthActionsType, AuthInitialStateType} from "./authReducerTypes";

const authInitialState: AuthInitialStateType = {
  isAuth: false,
}

export default function authReducer(state = authInitialState, action: AuthActionsType): AuthInitialStateType {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH: {
      return {...state, isAuth: action.payload}
    }
    default: return state;
  }
}
