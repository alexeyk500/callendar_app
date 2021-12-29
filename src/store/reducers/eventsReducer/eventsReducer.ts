import {EventActionsType, EventsActionsEnum, EventsStateType} from "./eventsReducerTypes";

const eventInitialState: EventsStateType = {
  guests: [],
  events: []
}

export default function eventsReducer (state = eventInitialState, action: EventActionsType): EventsStateType {
  switch (action.type) {
    case EventsActionsEnum.SET_GUESTS: {
      return ({...state, guests: action.payload})
    }
    case EventsActionsEnum.SET_EVENTS: {
      return ({...state, events: action.payload})
    }

    default: return state
  }
}
