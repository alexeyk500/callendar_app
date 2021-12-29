import {AuthActionsEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from "./authReducerTypes";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store";
import UserService from "../../../api/userService";

export const authActionCreators = {

  setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: AuthActionsEnum.SET_IS_AUTH, payload: isAuth}),

  setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),

  setError: (error: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),

  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading}),

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authActionCreators.setIsLoading(true))

      setTimeout(async () => {
        const response = await UserService.getUsers()
        const mockUsers = response.data
        const mockUser = mockUsers.find(user => {
          return (user.username === username && user.password === password)
        })
        if (mockUser) {
          localStorage.setItem('isAuth', 'true')
          localStorage.setItem('userName', mockUser.username)
          dispatch(authActionCreators.setUser(mockUser))
          dispatch(authActionCreators.setIsAuth(true))
        } else {
          dispatch(authActionCreators.setError('Wrong password or user does not exist'))
        }
        dispatch(authActionCreators.setIsLoading(false))
      }, 1000)

    } catch (e) {
      dispatch(authActionCreators.setError('error in login'))
      dispatch(authActionCreators.setIsLoading(false))
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('isAuth')
    localStorage.removeItem('userName')
    dispatch(authActionCreators.setUser({} as IUser))
    dispatch(authActionCreators.setIsAuth(false))
    dispatch(authActionCreators.setError(''))
    dispatch(authActionCreators.setIsLoading(false))
  }

}
