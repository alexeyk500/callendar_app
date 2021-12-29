import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export type EventsStateType = {
  guests: IUser[],
  events: IEvent[]
}

export enum EventsActionsEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestsAction {
  type: EventsActionsEnum.SET_GUESTS,
  payload: IUser[]
}

export interface SetEventsAction {
  type: EventsActionsEnum.SET_EVENTS,
  payload: IEvent[]
}

export type EventActionsType =
  SetGuestsAction |
  SetEventsAction

