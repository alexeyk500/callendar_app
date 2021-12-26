export type AuthInitialStateType = {
  isAuth:boolean,
}

export enum AuthActionEnum {
  SET_AUTH = "SET_AUTH"
}

type SetAuthAction = {
  type: AuthActionEnum.SET_AUTH,
  payload: boolean
}

export type AuthActionsType =
  SetAuthAction
