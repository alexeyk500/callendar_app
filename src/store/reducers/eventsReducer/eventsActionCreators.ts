import {EventsActionsEnum, SetEventsAction, SetGuestsAction} from "./eventsReducerTypes";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../store";
import UserService from "../../../api/userService";

export const eventsActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventsActionsEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction =>({type: EventsActionsEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(eventsActionCreators.setGuests(response.data))
    } catch (e) {
      console.log('fetchGuests error -', e)
    }
  },
  createEvent: (event: IEvent) => (dispatch: AppDispatch) => {
    try {
      const localStorageEvents = localStorage.getItem('events') || '[]'
      const events = JSON.parse(localStorageEvents) as IEvent[]
      events.push(event)
      dispatch(eventsActionCreators.setEvents(events))
      localStorage.setItem('events', JSON.stringify(events))
    } catch (e) {
      console.log('createEvent error -', e)
    }
  },
  fetchEvents: (username: string) => (dispatch: AppDispatch) => {
    try {
      const localStorageEvents = localStorage.getItem('events') || '[]'
      const events = JSON.parse(localStorageEvents) as IEvent[]
      const userEvents = events.filter(event => event.author === username || event.guest === username)
      dispatch(eventsActionCreators.setEvents(userEvents))
    } catch (e) {
      console.log('fetchEvents error -', e)
    }
  }
}
